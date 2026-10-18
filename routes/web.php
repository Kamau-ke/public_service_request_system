<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\CitizenRequestController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PortalNotificationController;

Route::inertia('/', 'citizen/welcome')->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function (Request $request) {
        return to_route($request->user()->isAdmin() ? 'admin.dashboard' : 'citizen.home');
    })->name('dashboard');

    Route::get('/citizen', [CitizenRequestController::class, 'home'])->name('citizen.home');
    Route::get('/citizen/requests', [CitizenRequestController::class, 'index'])->name('citizen.requests.index');
    Route::get('/citizen/requests/create', [CitizenRequestController::class, 'create'])->name('citizen.requests.create');
    Route::post('/citizen/requests', [CitizenRequestController::class, 'store'])->name('citizen.requests.store');
    Route::get('/citizen/notifications', [PortalNotificationController::class, 'citizenIndex'])->name('citizen.notifications');
    Route::patch('/citizen/notifications/read-all', [PortalNotificationController::class, 'markAllRead'])->name('citizen.notifications.read-all');
    Route::patch('/citizen/notifications/{portalNotification}/read', [PortalNotificationController::class, 'markRead'])->name('citizen.notifications.read');

    Route::middleware('admin')->prefix('admin')->name('admin.')->group(function () {
        Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
        Route::get('/requests', [AdminController::class, 'requests'])->name('requests.index');
        Route::get('/requests/{serviceRequest}', [AdminController::class, 'show'])->name('requests.show');
        Route::patch('/requests/{serviceRequest}', [AdminController::class, 'update'])->name('requests.update');
        Route::get('/citizens', [AdminController::class, 'citizens'])->name('citizens.index');
        Route::get('/notifications', [PortalNotificationController::class, 'adminIndex'])->name('notifications.index');
        Route::patch('/notifications/read-all', [PortalNotificationController::class, 'markAllRead'])->name('notifications.read-all');
        Route::patch('/notifications/{portalNotification}/read', [PortalNotificationController::class, 'markRead'])->name('notifications.read');
    });
});

require __DIR__.'/settings.php';
