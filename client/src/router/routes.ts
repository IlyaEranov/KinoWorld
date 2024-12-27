import React, { ComponentType } from "react"

const HomePage = React.lazy(() => import("../components/pages/HomePage/HomePage"))
const LoginPage = React.lazy(() => import("../components/pages/LoginPage/LoginPage"))
const RegisterPage = React.lazy(() => import("../components/pages/RegisterPage/RegisterPage"))
const ProfilePage = React.lazy(() => import("../components/pages/ProfilePage/ProfilePage"))
const FilmsPage = React.lazy(() => import("../components/pages/FilmsPage/FilmsPage"))
const SeriesPage = React.lazy(() => import("../components/pages/SeriesPage/SeriesPage"))
const AboutPage = React.lazy(() => import("../components/pages/AboutPage/AboutPage"))
const KinoPage = React.lazy(() => import("../components/pages/KinoPage/KinoPage"))

interface RoutesType{
    index?: boolean
    path: string
    component: ComponentType
}

enum RouteName{
    Home = "/",
    Login = "/login",
    Register = "/register",
    Profile = "/profile",
    Films = "/films",
    Series = "/series",
    About = "/about",
    Kino = "/films/:kinoId",
}

export const publicRoutes: RoutesType[] = [
    {index: true, path: RouteName.Home, component: HomePage},
    {path: RouteName.Login, component: LoginPage},
    {path: RouteName.Register, component: RegisterPage},
    {path: RouteName.Films, component: FilmsPage},
    {path: RouteName.Series, component: SeriesPage},
    {path: RouteName.About, component: AboutPage}
]

export const privateRoutes: RoutesType[] = [
    {path: RouteName.Profile, component: ProfilePage},
    {path: RouteName.Kino, component: KinoPage},
]