<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

Route::prefix('v1')->group(function (): void {
    Route::get('/health', fn () => response()->json([
        'status' => 'ok',
    ]));

    Route::get('/profile', [PortfolioController::class, 'profile']);
    Route::get('/experience', [PortfolioController::class, 'experience']);
    Route::get('/projects', [PortfolioController::class, 'projects']);
    Route::get('/skills', [PortfolioController::class, 'skills']);
    Route::get('/certifications', [PortfolioController::class, 'certifications']);
    Route::get('/awards', [PortfolioController::class, 'awards']);
    Route::get('/education', [PortfolioController::class, 'education']);
    Route::get('/social-links', [PortfolioController::class, 'socialLinks']);
    Route::get('/contact', [PortfolioController::class, 'contact']);
});
