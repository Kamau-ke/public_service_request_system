import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CitizenRequestController::home
 * @see app/Http/Controllers/CitizenRequestController.php:18
 * @route '/citizen'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/citizen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CitizenRequestController::home
 * @see app/Http/Controllers/CitizenRequestController.php:18
 * @route '/citizen'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CitizenRequestController::home
 * @see app/Http/Controllers/CitizenRequestController.php:18
 * @route '/citizen'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CitizenRequestController::home
 * @see app/Http/Controllers/CitizenRequestController.php:18
 * @route '/citizen'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CitizenRequestController::home
 * @see app/Http/Controllers/CitizenRequestController.php:18
 * @route '/citizen'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CitizenRequestController::home
 * @see app/Http/Controllers/CitizenRequestController.php:18
 * @route '/citizen'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CitizenRequestController::home
 * @see app/Http/Controllers/CitizenRequestController.php:18
 * @route '/citizen'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\CitizenRequestController::index
 * @see app/Http/Controllers/CitizenRequestController.php:79
 * @route '/citizen/requests'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/citizen/requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CitizenRequestController::index
 * @see app/Http/Controllers/CitizenRequestController.php:79
 * @route '/citizen/requests'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CitizenRequestController::index
 * @see app/Http/Controllers/CitizenRequestController.php:79
 * @route '/citizen/requests'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CitizenRequestController::index
 * @see app/Http/Controllers/CitizenRequestController.php:79
 * @route '/citizen/requests'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CitizenRequestController::index
 * @see app/Http/Controllers/CitizenRequestController.php:79
 * @route '/citizen/requests'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CitizenRequestController::index
 * @see app/Http/Controllers/CitizenRequestController.php:79
 * @route '/citizen/requests'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CitizenRequestController::index
 * @see app/Http/Controllers/CitizenRequestController.php:79
 * @route '/citizen/requests'
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
* @see \App\Http\Controllers\CitizenRequestController::create
 * @see app/Http/Controllers/CitizenRequestController.php:32
 * @route '/citizen/requests/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/citizen/requests/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CitizenRequestController::create
 * @see app/Http/Controllers/CitizenRequestController.php:32
 * @route '/citizen/requests/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CitizenRequestController::create
 * @see app/Http/Controllers/CitizenRequestController.php:32
 * @route '/citizen/requests/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CitizenRequestController::create
 * @see app/Http/Controllers/CitizenRequestController.php:32
 * @route '/citizen/requests/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CitizenRequestController::create
 * @see app/Http/Controllers/CitizenRequestController.php:32
 * @route '/citizen/requests/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CitizenRequestController::create
 * @see app/Http/Controllers/CitizenRequestController.php:32
 * @route '/citizen/requests/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CitizenRequestController::create
 * @see app/Http/Controllers/CitizenRequestController.php:32
 * @route '/citizen/requests/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\CitizenRequestController::store
 * @see app/Http/Controllers/CitizenRequestController.php:39
 * @route '/citizen/requests'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/citizen/requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CitizenRequestController::store
 * @see app/Http/Controllers/CitizenRequestController.php:39
 * @route '/citizen/requests'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CitizenRequestController::store
 * @see app/Http/Controllers/CitizenRequestController.php:39
 * @route '/citizen/requests'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CitizenRequestController::store
 * @see app/Http/Controllers/CitizenRequestController.php:39
 * @route '/citizen/requests'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CitizenRequestController::store
 * @see app/Http/Controllers/CitizenRequestController.php:39
 * @route '/citizen/requests'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CitizenRequestController::show
 * @see app/Http/Controllers/CitizenRequestController.php:87
 * @route '/citizen/requests/{serviceRequest}'
 */
export const show = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/citizen/requests/{serviceRequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CitizenRequestController::show
 * @see app/Http/Controllers/CitizenRequestController.php:87
 * @route '/citizen/requests/{serviceRequest}'
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
* @see \App\Http\Controllers\CitizenRequestController::show
 * @see app/Http/Controllers/CitizenRequestController.php:87
 * @route '/citizen/requests/{serviceRequest}'
 */
show.get = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CitizenRequestController::show
 * @see app/Http/Controllers/CitizenRequestController.php:87
 * @route '/citizen/requests/{serviceRequest}'
 */
show.head = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CitizenRequestController::show
 * @see app/Http/Controllers/CitizenRequestController.php:87
 * @route '/citizen/requests/{serviceRequest}'
 */
    const showForm = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CitizenRequestController::show
 * @see app/Http/Controllers/CitizenRequestController.php:87
 * @route '/citizen/requests/{serviceRequest}'
 */
        showForm.get = (args: { serviceRequest: string | number } | [serviceRequest: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CitizenRequestController::show
 * @see app/Http/Controllers/CitizenRequestController.php:87
 * @route '/citizen/requests/{serviceRequest}'
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
const CitizenRequestController = { home, index, create, store, show }

export default CitizenRequestController