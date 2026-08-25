<?php

$frontendUrls = env('FRONTEND_URLS');

if ($frontendUrls) {
    $frontendUrls = array_values(array_filter(array_map(
        'trim',
        explode(',', $frontendUrls)
    )));
} else {
    $frontendUrls = env('FRONTEND_URL')
        ? [env('FRONTEND_URL')]
        : [];
}

$isProduction = env('APP_ENV') === 'production';
$developmentOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5174',
];

return [

    'paths' => ['api/*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => $isProduction
        ? $frontendUrls
        : array_values(array_unique(array_merge(
            $developmentOrigins,
            $frontendUrls,
    ))),

    'allowed_origins_patterns' => $isProduction ? [] : [
        '#http://localhost:[0-9]+#',
        '#http://127.0.0.1:[0-9]+#',
    ],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
