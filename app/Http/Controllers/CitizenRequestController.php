<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
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

        return to_route('citizen.requests.index')->with('success', "Request {$serviceRequest->reference} was submitted.");
    }

    public function index(Request $request): Response
    {
        return Inertia::render('citizen/my-requests', [
            'requests' => ServiceRequest::where('user_id', $request->user()->id)->latest()->get(),
        ]);
    }

    public function notifications(Request $request): Response
    {
        $items = ServiceRequest::where('user_id', $request->user()->id)->latest('updated_at')->get();

        return Inertia::render('citizen/notifications', [
            'notifications' => $items->map(fn (ServiceRequest $item) => [
                'id' => $item->id,
                'reference' => $item->reference,
                'category' => $item->category,
                'status' => $item->status,
                'note' => $item->status_note,
                'created_at' => $item->created_at->toIso8601String(),
                'updated_at' => $item->updated_at->toIso8601String(),
            ]),
        ]);
    }
}
