import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PortalNotificationController::index
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::index
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::index
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortalNotificationController::index
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::index
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::index
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortalNotificationController::index
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
export const readAll = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: readAll.url(options),
    method: 'patch',
})

readAll.definition = {
    methods: ["patch"],
    url: '/admin/notifications/read-all',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
readAll.url = (options?: RouteQueryOptions) => {
    return readAll.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
readAll.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: readAll.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
    const readAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: readAll.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
        readAllForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: readAll.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    readAll.form = readAllForm
/**
* @see \App\Http\Controllers\PortalNotificationController::read
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
export const read = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

read.definition = {
    methods: ["patch"],
    url: '/admin/notifications/{portalNotification}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::read
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
read.url = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { portalNotification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { portalNotification: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    portalNotification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        portalNotification: typeof args.portalNotification === 'object'
                ? args.portalNotification.id
                : args.portalNotification,
                }

    return read.definition.url
            .replace('{portalNotification}', parsedArgs.portalNotification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::read
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
read.patch = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::read
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
    const readForm = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: read.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::read
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
        readForm.patch = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: read.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    read.form = readForm
const notifications = {
    index: Object.assign(index, index),
readAll: Object.assign(readAll, readAll),
read: Object.assign(read, read),
}

export default notifications