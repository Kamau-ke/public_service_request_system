<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
use App\Models\User;
use App\Models\PortalNotification;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function dashboard(): Response
    {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'open' => ServiceRequest::whereIn('status', ['Pending', 'In Progress'])->count(),
                'resolved' => ServiceRequest::where('status', 'Resolved')->count(),
            ],
        ]);
    }

    public function requests(Request $request): Response
    {
        $filters = $request->validate([
            'status' => ['nullable', Rule::in(['Pending', 'In Progress', 'Resolved'])],
            'category' => ['nullable', 'string', 'max:100'],
            'county' => ['nullable', 'string', 'max:100'],
            'search' => ['nullable', 'string', 'max:150'],
        ]);

        $query = ServiceRequest::with('user')->latest();
        $query->when($filters['status'] ?? null, fn ($q, $status) => $q->where('status', $status));
        $query->when($filters['category'] ?? null, fn ($q, $category) => $q->where('category', $category));
        $query->when($filters['county'] ?? null, fn ($q, $county) => $q->where('county', $county));
        $query->when($filters['search'] ?? null, function ($q, $search) {
            $q->where(function ($inner) use ($search) {
                $inner->where('reference', 'like', "%{$search}%")
                    ->orWhere('location', 'like', "%{$search}%")
                    ->orWhereHas('user', fn ($user) => $user->where('name', 'like', "%{$search}%"));
            });
        });

        return Inertia::render('admin/requests/index', [
            'requests' => $query->paginate(12)->withQueryString()->through(function (ServiceRequest $item) {
                if ($item->sub_county) {
                    $item->setAttribute('location', $item->sub_county.', '.$item->location);
                }

                return $item;
            }),
            'filters' => $filters,
            'categories' => ServiceRequest::query()->select('category')->distinct()->orderBy('category')->pluck('category'),
            'counties' => ServiceRequest::query()->select('county')->distinct()->orderBy('county')->pluck('county'),
        ]);
    }

    public function show(int $serviceRequest): Response
    {
        $serviceRequest = ServiceRequest::query()->findOrFail($serviceRequest);
        $serviceRequest->load('user');
        if ($serviceRequest->sub_county) {
            $serviceRequest->setAttribute('location', $serviceRequest->sub_county.', '.$serviceRequest->location);
        }

        return Inertia::render('admin/requests/show', [
            'serviceRequest' => [
                ...$serviceRequest->toArray(),
                'image_url' => $serviceRequest->image_path ? Storage::disk('public')->url($serviceRequest->image_path) : null,
            ],
        ]);
    }

    public function update(Request $request, ServiceRequest $serviceRequest): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', Rule::in(['Pending', 'In Progress', 'Resolved'])],
            'status_note' => ['nullable', 'string', 'max:1000'],
        ]);

        $changed = $serviceRequest->status !== $validated['status']
            || $serviceRequest->status_note !== ($validated['status_note'] ?? null);
        $serviceRequest->update($validated);

        if ($changed) {
            PortalNotification::create([
                'user_id' => $serviceRequest->user_id,
                'service_request_id' => $serviceRequest->id,
                'title' => 'Request update',
                'message' => $validated['status_note'] ?: "Your {$serviceRequest->category} request {$serviceRequest->reference} is now {$serviceRequest->status}.",
            ]);
        }

        return back()->with('success', "{$serviceRequest->reference} was updated.");
    }

    // Get and filter citizens
    public function citizens(Request $request): Response
    {
        $filters = $request->validate(['search' => ['nullable', 'string', 'max:150']]);
        $citizens = User::query()->where('is_admin', false)->withCount('serviceRequests')->latest();
        $citizens->when($filters['search'] ?? null, fn ($q, $search) => $q->where(function ($inner) use ($search) {
            $inner->where('name', 'like', "%{$search}%")->orWhere('email', 'like', "%{$search}%");
        }));

        return Inertia::render('admin/citizens/index', [
            'citizens' => $citizens->paginate(12)->withQueryString(),
            'filters' => $filters,
        ]);
    }
}
