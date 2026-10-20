import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import requests from './requests'
import notifications1ce82a from './notifications'
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
* @see \App\Http\Controllers\PortalNotificationController::notifications
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
export const notifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})

notifications.definition = {
    methods: ["get","head"],
    url: '/citizen/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PortalNotificationController::notifications
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
notifications.url = (options?: RouteQueryOptions) => {
    return notifications.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortalNotificationController::notifications
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
notifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PortalNotificationController::notifications
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
notifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifications.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PortalNotificationController::notifications
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
    const notificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: notifications.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PortalNotificationController::notifications
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
        notificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PortalNotificationController::notifications
 * @see app/Http/Controllers/PortalNotificationController.php:13
 * @route '/citizen/notifications'
 */
        notificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    notifications.form = notificationsForm
const citizen = {
    home: Object.assign(home, home),
requests: Object.assign(requests, requests),
notifications: Object.assign(notifications, notifications1ce82a),
}

export default citizen