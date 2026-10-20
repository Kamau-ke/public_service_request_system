import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
 */
export const readAll = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: readAll.url(options),
    method: 'patch',
})

readAll.definition = {
    methods: ["patch"],
    url: '/citizen/notifications/read-all',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
 */
readAll.url = (options?: RouteQueryOptions) => {
    return readAll.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
 */
readAll.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: readAll.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::readAll
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
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
 * @route '/citizen/notifications/read-all'
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
 * @route '/citizen/notifications/{portalNotification}/read'
 */
export const read = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

read.definition = {
    methods: ["patch"],
    url: '/citizen/notifications/{portalNotification}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::read
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/citizen/notifications/{portalNotification}/read'
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
 * @route '/citizen/notifications/{portalNotification}/read'
 */
read.patch = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::read
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/citizen/notifications/{portalNotification}/read'
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
 * @route '/citizen/notifications/{portalNotification}/read'
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
    readAll: Object.assign(readAll, readAll),
read: Object.assign(read, read),
}

export default notifications