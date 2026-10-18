<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
use App\Models\PortalNotification;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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
            'requests' => ServiceRequest::where('user_id', $userId)->latest()->limit(5)->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('citizen/submit-request');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'category' => ['required', Rule::in(['Streetlight', 'Water supply', 'Garbage collection', 'Road damage', 'Other'])],
            'county' => ['required', 'string', 'max:100'],
            'location' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:5000'],
            'image' => ['nullable', 'image', 'max:10240'],
        ]);

        $serviceRequest = ServiceRequest::create([
            'user_id' => $request->user()->id,
            'category' => $validated['category'],
            'county' => $validated['county'],
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
            'message' => "{$request->user()->name} submitted a {$serviceRequest->category} request ({$serviceRequest->reference}) in {$serviceRequest->county} County.",
        ]));

        return to_route('citizen.requests.index')->with('success', "Request {$serviceRequest->reference} was submitted.");
    }

    public function index(Request $request): Response
    {
        return Inertia::render('citizen/my-requests', [
            'requests' => ServiceRequest::where('user_id', $request->user()->id)->latest()->get(),
        ]);
    }

}
