import { AboutPage } from "pages/AboutPage"
import { ContactsPage } from "pages/ContactsPage"
import { MainPage } from "pages/MainPage"
import { RestourantsPage } from "pages/RestourantsPage"
import { RoomDatailPage } from "pages/RoomDetailPage"
import { RoomsPage } from "pages/RoomsPage"
import { ServicesPage } from "pages/ServicesPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ROOMS = 'rooms',
    ROOM = 'room',
    SERVICES = 'services',
    RESTOURANTS = 'restourants',
    CONTACTS = 'contacts'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ROOMS]: '/rooms',
    [AppRoutes.ROOM]: '/rooms/:id',
    [AppRoutes.SERVICES]: '/services',
    [AppRoutes.RESTOURANTS]: '/restourants',
    [AppRoutes.CONTACTS]: '/contacts'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />
    },
    [AppRoutes.ROOMS]: {
        path: RoutePaths.rooms,
        element: <RoomsPage />
    },
    [AppRoutes.ROOM]: {
        path: RoutePaths.room,
        element: <RoomDatailPage />
    },
    [AppRoutes.SERVICES]: {
        path: RoutePaths.services,
        element: <ServicesPage />
    },
    [AppRoutes.RESTOURANTS]: {
        path: RoutePaths.restourants,
        element: <RestourantsPage />
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePaths.contacts,
        element: <ContactsPage />
    }
}