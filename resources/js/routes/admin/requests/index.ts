import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:27
 * @route '/admin/requests'
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
const requests = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
update: Object.assign(update, update),
}

export default requests