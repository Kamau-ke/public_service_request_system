<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
use App\Models\PortalNotification;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class CitizenRequestController extends Controller
{
    public function home(Request $request): Response
    {
        $userId = $request->user()->id;

        return Inertia::render('citizen/home', [
            'stats' => [
                'open' => ServiceRequest::where('user_id', $userId)->whereIn('status', ['Pending', 'In Progress'])->count(),
                'resolved' => ServiceRequest::where('user_id', $userId)->where('status', 'Resolved')->count(),
            ],
            'requests' => ServiceRequest::where('user_id', $userId)->latest()->limit(5)->get()
                ->map(fn (ServiceRequest $item) => $this->includeSubCountyInLocation($item)),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('citizen/submit-request', [
            'countyLocations' => config('kenyan_locations'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'category' => ['required', Rule::in(['Streetlight', 'Water supply', 'Garbage collection', 'Road damage', 'Other'])],
            'county' => ['required', 'string', Rule::in(array_keys(config('kenyan_locations')))],
            'sub_county' => ['required', 'string', Rule::in(config('kenyan_locations.'.$request->input('county'), []))],
            'location' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:5000'],
            'image' => ['nullable', 'image', 'max:10240'],
        ]);

        $serviceRequest = ServiceRequest::create([
            'user_id' => $request->user()->id,
            'category' => $validated['category'],
            'county' => $validated['county'],
            'sub_county' => $validated['sub_county'],
            'location' => $validated['location'],
            'description' => $validated['description'],
            'reference' => 'SR-'.Str::upper(Str::random(6)),
            'image_path' => $request->file('image')?->store('service-requests', 'public'),
            'status' => 'Pending',
        ]);

        PortalNotification::create([
            'user_id' => $request->user()->id,
            'service_request_id' => $serviceRequest->id,
            'title' => 'Request received',
            'message' => "Your {$serviceRequest->category} request {$serviceRequest->reference} was received and is pending review.",
        ]);

        User::where('is_admin', true)->get()->each(fn (User $admin) => PortalNotification::create([
            'user_id' => $admin->id,
            'service_request_id' => $serviceRequest->id,
            'title' => 'New service request',
            'message' => "{$request->user()->name} submitted a {$serviceRequest->category} request ({$serviceRequest->reference}) in {$serviceRequest->sub_county}, {$serviceRequest->county} County.",
        ]));

        return to_route('citizen.requests.index')->with('success', "Request {$serviceRequest->reference} was submitted.");
    }

    public function index(Request $request): Response
    {
        return Inertia::render('citizen/my-requests', [
            'requests' => ServiceRequest::where('user_id', $request->user()->id)->latest()->get()
                ->map(fn (ServiceRequest $item) => $this->includeSubCountyInLocation($item)),
        ]);
    }

    public function show(Request $request, int $serviceRequest): Response
    {
        $item = ServiceRequest::query()
            ->where('user_id', $request->user()->id)
            ->findOrFail($serviceRequest);

        $this->includeSubCountyInLocation($item);

        return Inertia::render('citizen/request-show', [
            'serviceRequest' => [
                ...$item->toArray(),
                'image_url' => $item->image_path ? Storage::disk('public')->url($item->image_path) : null,
            ],
        ]);
    }

    private function includeSubCountyInLocation(ServiceRequest $serviceRequest): ServiceRequest
    {
        if ($serviceRequest->sub_county) {
            $serviceRequest->setAttribute('location', $serviceRequest->sub_county.', '.$serviceRequest->location);
        }

        return $serviceRequest;
    }

}
