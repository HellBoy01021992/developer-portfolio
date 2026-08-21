<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    public function profile(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.profile'),
        ]);
    }

    public function socialLinks(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.social_links'),
        ]);
    }

    public function contact(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.contact'),
        ]);
    }

    public function experience(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.experience'),
        ]);
    }

    public function projects(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.projects'),
        ]);
    }

    public function skills(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.skills'),
        ]);
    }

    public function certifications(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.certifications'),
        ]);
    }

    public function awards(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.awards'),
        ]);
    }

    public function education(): JsonResponse
    {
        return response()->json([
            'data' => config('portfolio.education'),
        ]);
    }
}
