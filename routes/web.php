<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CitizenRequestController;

Route::inertia('/', 'citizen/welcome')->name('home');

Route::middleware(['auth'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::get('/citizen', [CitizenRequestController::class, 'home'])->name('citizen.home');
    Route::get('/citizen/requests', [CitizenRequestController::class, 'index'])->name('citizen.requests.index');
    Route::get('/citizen/requests/create', [CitizenRequestController::class, 'create'])->name('citizen.requests.create');
    Route::post('/citizen/requests', [CitizenRequestController::class, 'store'])->name('citizen.requests.store');
    Route::get('/citizen/notifications', [CitizenRequestController::class, 'notifications'])->name('citizen.notifications');
});

require __DIR__.'/settings.php';
