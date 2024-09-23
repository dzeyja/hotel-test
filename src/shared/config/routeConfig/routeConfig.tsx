import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RoomsPage } from "pages/RoomsPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ROOMS = 'rooms'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ROOMS]: '/rooms'
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
    }
}