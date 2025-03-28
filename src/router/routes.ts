import React, { ComponentType, useMemo } from "react"

const HomePage = React.lazy(() => import("../components/pages/HomePage"))
const KinoPage = React.lazy(() => import("../components/HOC/RedirectToWatch"))

enum RoutesNames{
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
    Movies = "/watch/movies",
    Series = "/watch/series",
    Animations = "/watch/animations"
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
