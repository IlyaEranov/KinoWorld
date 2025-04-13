import React, { ComponentType } from "react"

const HomePage = React.lazy(() => import("../components/pages/HomePage"))
const KinoPage = React.lazy(() => import("../components/HOC/RedirectToWatch"))

export enum RoutesNames{
    Home = "/",
    Watch = "/watch/:type?/:id?",
    Auth = "/auth/:type?"
}

interface RouteType{
    index?: boolean
    path: string
    component: ComponentType
}

export const publicRoutes: RouteType[] = [
    {index: true, path: RoutesNames.Home, component: HomePage},
    {path: RoutesNames.Watch, component: KinoPage}
]

export enum pathsLinks{
    Home = "/",
    Movies = "/watch/movie",
    Series = "/watch/tv-series",
    Animations = "/watch/cartoon"
}

interface linkListType{
    path: string
    value: string
}

export const linkList: linkListType[] = [
    {path: pathsLinks.Home, value: "Главная"},
    {path: pathsLinks.Movies, value: "Фильмы"},
    {path: pathsLinks.Series, value: "Сериалы"},
    {path: pathsLinks.Animations, value: "Мультфильмы"}
]

export const generateLinkToWatch = (type: string, id?: string) => {
    return `/watch/${type}` + `/${id}`
}