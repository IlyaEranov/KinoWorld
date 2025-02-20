import React, { ComponentType } from "react"

const HomePage = React.lazy(() => import("../components/pages/HomePage"))
const WatchPage = React.lazy(() => import("../components/pages/WatchPage"))

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
    {path: RoutesNames.Watch, component: WatchPage}
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