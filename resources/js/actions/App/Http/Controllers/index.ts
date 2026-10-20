import CitizenRequestController from './CitizenRequestController'
import PortalNotificationController from './PortalNotificationController'
import AdminController from './AdminController'
import Settings from './Settings'
const Controllers = {
    CitizenRequestController: Object.assign(CitizenRequestController, CitizenRequestController),
PortalNotificationController: Object.assign(PortalNotificationController, PortalNotificationController),
AdminController: Object.assign(AdminController, AdminController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers