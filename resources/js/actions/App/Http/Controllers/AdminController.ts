import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AdminController::dashboard
 * @see app/Http/Controllers/AdminController.php:17
 * @route '/admin'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::dashboard
 * @see app/Http/Controllers/AdminController.php:17
 * @route '/admin'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::dashboard
 * @see app/Http/Controllers/AdminController.php:17
 * @route '/admin'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::dashboard
 * @see app/Http/Controllers/AdminController.php:17
 * @route '/admin'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::dashboard
 * @see app/Http/Controllers/AdminController.php:17
 * @route '/admin'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::dashboard
 * @see app/Http/Controllers/AdminController.php:17
 * @route '/admin'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::dashboard
 * @see app/Http/Controllers/AdminController.php:17
 * @route '/admin'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\AdminController::requests
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
export const requests = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: requests.url(options),
    method: 'get',
})

requests.definition = {
    methods: ["get","head"],
    url: '/admin/requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::requests
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
requests.url = (options?: RouteQueryOptions) => {
    return requests.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::requests
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
requests.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: requests.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::requests
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
requests.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: requests.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::requests
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
    const requestsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: requests.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::requests
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
        requestsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: requests.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::requests
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
        requestsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: requests.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    requests.form = requestsForm
/**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:62
 * @route '/admin/requests/{serviceRequest}'
 */
export const show = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/requests/{serviceRequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:62
 * @route '/admin/requests/{serviceRequest}'
 */
show.url = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { serviceRequest: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    serviceRequest: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        serviceRequest: args.serviceRequest,
                }

    return show.definition.url
            .replace('{serviceRequest}', parsedArgs.serviceRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:62
 * @route '/admin/requests/{serviceRequest}'
 */
show.get = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:62
 * @route '/admin/requests/{serviceRequest}'
 */
show.head = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:62
 * @route '/admin/requests/{serviceRequest}'
 */
    const showForm = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:62
 * @route '/admin/requests/{serviceRequest}'
 */
        showForm.get = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:62
 * @route '/admin/requests/{serviceRequest}'
 */
        showForm.head = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:78
 * @route '/admin/requests/{serviceRequest}'
 */
export const update = (args: { serviceRequest: number | { id: number } } | [serviceRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/admin/requests/{serviceRequest}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:78
 * @route '/admin/requests/{serviceRequest}'
 */
update.url = (args: { serviceRequest: number | { id: number } } | [serviceRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { serviceRequest: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { serviceRequest: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    serviceRequest: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        serviceRequest: typeof args.serviceRequest === 'object'
                ? args.serviceRequest.id
                : args.serviceRequest,
                }

    return update.definition.url
            .replace('{serviceRequest}', parsedArgs.serviceRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:78
 * @route '/admin/requests/{serviceRequest}'
 */
update.patch = (args: { serviceRequest: number | { id: number } } | [serviceRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:78
 * @route '/admin/requests/{serviceRequest}'
 */
    const updateForm = (args: { serviceRequest: number | { id: number } } | [serviceRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:78
 * @route '/admin/requests/{serviceRequest}'
 */
        updateForm.patch = (args: { serviceRequest: number | { id: number } } | [serviceRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\AdminController::citizens
 * @see app/Http/Controllers/AdminController.php:102
 * @route '/admin/citizens'
 */
export const citizens = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: citizens.url(options),
    method: 'get',
})

citizens.definition = {
    methods: ["get","head"],
    url: '/admin/citizens',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::citizens
 * @see app/Http/Controllers/AdminController.php:102
 * @route '/admin/citizens'
 */
citizens.url = (options?: RouteQueryOptions) => {
    return citizens.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::citizens
 * @see app/Http/Controllers/AdminController.php:102
 * @route '/admin/citizens'
 */
citizens.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: citizens.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::citizens
 * @see app/Http/Controllers/AdminController.php:102
 * @route '/admin/citizens'
 */
citizens.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: citizens.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::citizens
 * @see app/Http/Controllers/AdminController.php:102
 * @route '/admin/citizens'
 */
    const citizensForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: citizens.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::citizens
 * @see app/Http/Controllers/AdminController.php:102
 * @route '/admin/citizens'
 */
        citizensForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: citizens.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::citizens
 * @see app/Http/Controllers/AdminController.php:102
 * @route '/admin/citizens'
 */
        citizensForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: citizens.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    citizens.form = citizensForm
const AdminController = { dashboard, requests, show, update, citizens }

export default AdminController