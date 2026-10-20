import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PortalNotificationController::citizenIndex
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
export const citizenIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: citizenIndex.url(options),
    method: 'get',
})

citizenIndex.definition = {
    methods: ["get","head"],
    url: '/citizen/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::citizenIndex
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
citizenIndex.url = (options?: RouteQueryOptions) => {
    return citizenIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::citizenIndex
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
citizenIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: citizenIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortalNotificationController::citizenIndex
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
citizenIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: citizenIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::citizenIndex
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
    const citizenIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: citizenIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::citizenIndex
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
        citizenIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: citizenIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortalNotificationController::citizenIndex
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
        citizenIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: citizenIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    citizenIndex.form = citizenIndexForm
/**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
 */
const markAllReadffd5fc07fdf03011145957e5c3010d3c = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAllReadffd5fc07fdf03011145957e5c3010d3c.url(options),
    method: 'patch',
})

markAllReadffd5fc07fdf03011145957e5c3010d3c.definition = {
    methods: ["patch"],
    url: '/citizen/notifications/read-all',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
 */
markAllReadffd5fc07fdf03011145957e5c3010d3c.url = (options?: RouteQueryOptions) => {
    return markAllReadffd5fc07fdf03011145957e5c3010d3c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
 */
markAllReadffd5fc07fdf03011145957e5c3010d3c.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAllReadffd5fc07fdf03011145957e5c3010d3c.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
 */
    const markAllReadffd5fc07fdf03011145957e5c3010d3cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAllReadffd5fc07fdf03011145957e5c3010d3c.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/citizen/notifications/read-all'
 */
        markAllReadffd5fc07fdf03011145957e5c3010d3cForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAllReadffd5fc07fdf03011145957e5c3010d3c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    markAllReadffd5fc07fdf03011145957e5c3010d3c.form = markAllReadffd5fc07fdf03011145957e5c3010d3cForm
    /**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
const markAllRead4331fbeb8ed6efd6ad4763197db1f627 = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAllRead4331fbeb8ed6efd6ad4763197db1f627.url(options),
    method: 'patch',
})

markAllRead4331fbeb8ed6efd6ad4763197db1f627.definition = {
    methods: ["patch"],
    url: '/admin/notifications/read-all',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
markAllRead4331fbeb8ed6efd6ad4763197db1f627.url = (options?: RouteQueryOptions) => {
    return markAllRead4331fbeb8ed6efd6ad4763197db1f627.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
markAllRead4331fbeb8ed6efd6ad4763197db1f627.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markAllRead4331fbeb8ed6efd6ad4763197db1f627.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
    const markAllRead4331fbeb8ed6efd6ad4763197db1f627Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAllRead4331fbeb8ed6efd6ad4763197db1f627.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::markAllRead
 * @see app/Http/Controllers/PortalNotificationController.php:32
 * @route '/admin/notifications/read-all'
 */
        markAllRead4331fbeb8ed6efd6ad4763197db1f627Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAllRead4331fbeb8ed6efd6ad4763197db1f627.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    markAllRead4331fbeb8ed6efd6ad4763197db1f627.form = markAllRead4331fbeb8ed6efd6ad4763197db1f627Form

/**
* Multiple routes resolve to \App\Http\Controllers\PortalNotificationController::markAllRead, so this export is a
* dictionary keyed by URI rather than a callable, with the verbs prefixed where two routes share a URI.
* Call a specific route with `markAllRead['<key>'](...)`, or import the route by name from your
* generated `routes/` directory.
*/
export const markAllRead = {
    '/citizen/notifications/read-all': markAllReadffd5fc07fdf03011145957e5c3010d3c,
    '/admin/notifications/read-all': markAllRead4331fbeb8ed6efd6ad4763197db1f627,
}

/**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/citizen/notifications/{portalNotification}/read'
 */
const markRead48775f8691f90e913cc04991e880d520 = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markRead48775f8691f90e913cc04991e880d520.url(args, options),
    method: 'patch',
})

markRead48775f8691f90e913cc04991e880d520.definition = {
    methods: ["patch"],
    url: '/citizen/notifications/{portalNotification}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/citizen/notifications/{portalNotification}/read'
 */
markRead48775f8691f90e913cc04991e880d520.url = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return markRead48775f8691f90e913cc04991e880d520.definition.url
            .replace('{portalNotification}', parsedArgs.portalNotification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/citizen/notifications/{portalNotification}/read'
 */
markRead48775f8691f90e913cc04991e880d520.patch = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markRead48775f8691f90e913cc04991e880d520.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/citizen/notifications/{portalNotification}/read'
 */
    const markRead48775f8691f90e913cc04991e880d520Form = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markRead48775f8691f90e913cc04991e880d520.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/citizen/notifications/{portalNotification}/read'
 */
        markRead48775f8691f90e913cc04991e880d520Form.patch = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markRead48775f8691f90e913cc04991e880d520.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    markRead48775f8691f90e913cc04991e880d520.form = markRead48775f8691f90e913cc04991e880d520Form
    /**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
const markRead79b7a394bec2faf8b4b68a0862c3ca2b = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markRead79b7a394bec2faf8b4b68a0862c3ca2b.url(args, options),
    method: 'patch',
})

markRead79b7a394bec2faf8b4b68a0862c3ca2b.definition = {
    methods: ["patch"],
    url: '/admin/notifications/{portalNotification}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
markRead79b7a394bec2faf8b4b68a0862c3ca2b.url = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return markRead79b7a394bec2faf8b4b68a0862c3ca2b.definition.url
            .replace('{portalNotification}', parsedArgs.portalNotification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
markRead79b7a394bec2faf8b4b68a0862c3ca2b.patch = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markRead79b7a394bec2faf8b4b68a0862c3ca2b.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
    const markRead79b7a394bec2faf8b4b68a0862c3ca2bForm = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markRead79b7a394bec2faf8b4b68a0862c3ca2b.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::markRead
 * @see app/Http/Controllers/PortalNotificationController.php:23
 * @route '/admin/notifications/{portalNotification}/read'
 */
        markRead79b7a394bec2faf8b4b68a0862c3ca2bForm.patch = (args: { portalNotification: number | { id: number } } | [portalNotification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markRead79b7a394bec2faf8b4b68a0862c3ca2b.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    markRead79b7a394bec2faf8b4b68a0862c3ca2b.form = markRead79b7a394bec2faf8b4b68a0862c3ca2bForm

/**
* Multiple routes resolve to \App\Http\Controllers\PortalNotificationController::markRead, so this export is a
* dictionary keyed by URI rather than a callable, with the verbs prefixed where two routes share a URI.
* Call a specific route with `markRead['<key>'](...)`, or import the route by name from your
* generated `routes/` directory.
*/
export const markRead = {
    '/citizen/notifications/{portalNotification}/read': markRead48775f8691f90e913cc04991e880d520,
    '/admin/notifications/{portalNotification}/read': markRead79b7a394bec2faf8b4b68a0862c3ca2b,
}

/**
* @see \App\Http\Controllers\PortalNotificationController::adminIndex
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
export const adminIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminIndex.url(options),
    method: 'get',
})

adminIndex.definition = {
    methods: ["get","head"],
    url: '/admin/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::adminIndex
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
adminIndex.url = (options?: RouteQueryOptions) => {
    return adminIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::adminIndex
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
adminIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortalNotificationController::adminIndex
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
adminIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adminIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::adminIndex
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
    const adminIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: adminIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::adminIndex
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
        adminIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: adminIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortalNotificationController::adminIndex
 * @see app/Http/Controllers/PortalNotificationController.php:18
 * @route '/admin/notifications'
 */
        adminIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: adminIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    adminIndex.form = adminIndexForm
const PortalNotificationController = { citizenIndex, markAllRead, markRead, adminIndex }

export default PortalNotificationController