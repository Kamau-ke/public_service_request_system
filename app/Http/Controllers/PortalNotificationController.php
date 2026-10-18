<?php

namespace App\Http\Controllers;

use App\Models\PortalNotification;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortalNotificationController extends Controller
{
    public function citizenIndex(Request $request): Response
    {
        return $this->renderIndex($request, 'citizen/notifications');
    }

    public function adminIndex(Request $request): Response
    {
        return $this->renderIndex($request, 'admin/notifications');
    }

    public function markRead(Request $request, PortalNotification $portalNotification): RedirectResponse
    {
        abort_unless((int) $portalNotification->user_id === (int) $request->user()->id, 404);

        $portalNotification->update(['read_at' => now()]);

        return back()->with('success', 'Notification marked as read.');
    }

    public function markAllRead(Request $request): RedirectResponse
    {
        PortalNotification::where('user_id', $request->user()->id)
            ->whereNull('read_at')
            ->update(['read_at' => now()]);

        return back()->with('success', 'All notifications marked as read.');
    }

    private function renderIndex(Request $request, string $page): Response
    {
        $notifications = PortalNotification::where('user_id', $request->user()->id)
            ->with('serviceRequest:id,reference')
            ->latest()
            ->paginate(20)
            ->through(fn (PortalNotification $notification) => [
                'id' => $notification->id,
                'title' => $notification->title,
                'message' => $notification->message,
                'read_at' => $notification->read_at?->toIso8601String(),
                'created_at' => $notification->created_at->toIso8601String(),
                'request_id' => $notification->serviceRequest?->id,
                'reference' => $notification->serviceRequest?->reference,
            ]);

        return Inertia::render($page, ['notifications' => $notifications]);
    }
}
