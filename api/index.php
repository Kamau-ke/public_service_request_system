<?php

// Vercel's function filesystem is read-only except for the temporary directory.
if (getenv('VERCEL') === '1') {
    $tmp = sys_get_temp_dir().'/sauti-yako';
    $storage = $tmp.'/storage';
    $cache = $tmp.'/bootstrap-cache';
    $views = $storage.'/framework/views';

    $runtimePaths = [
        'LARAVEL_STORAGE_PATH' => $storage,
        'APP_CONFIG_CACHE' => $cache.'/config.php',
        'APP_EVENTS_CACHE' => $cache.'/events.php',
        'APP_PACKAGES_CACHE' => $cache.'/packages.php',
        'APP_ROUTES_CACHE' => $cache.'/routes.php',
        'APP_SERVICES_CACHE' => $cache.'/services.php',
        'VIEW_COMPILED_PATH' => $views,
        'LOG_CHANNEL' => 'stderr',
    ];

    foreach ($runtimePaths as $name => $value) {
        putenv("{$name}={$value}");
        $_ENV[$name] = $value;
        $_SERVER[$name] = $value;
    }

    foreach ([$storage.'/app/public', $storage.'/framework/cache/data', $storage.'/framework/sessions', $storage.'/logs', $cache, $views] as $directory) {
        if (! is_dir($directory)) {
            mkdir($directory, 0775, true);
        }
    }

    // Vercel environment variables can hold Aiven's public CA PEM as multiline text.
    $caContent = getenv('MYSQL_ATTR_SSL_CA_CONTENT');
    if (is_string($caContent) && $caContent !== '') {
        $caPath = $tmp.'/aiven-mysql-ca.pem';
        if (! is_file($caPath)) {
            file_put_contents($caPath, $caContent, LOCK_EX);
            chmod($caPath, 0600);
        }

        putenv("MYSQL_ATTR_SSL_CA={$caPath}");
        $_ENV['MYSQL_ATTR_SSL_CA'] = $caPath;
        $_SERVER['MYSQL_ATTR_SSL_CA'] = $caPath;
    }
}

require __DIR__.'/../public/index.php';
