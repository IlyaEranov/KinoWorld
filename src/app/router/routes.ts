import React, { ComponentType } from "react"
const HomePage = React.lazy(() => import("../../pages/HomePage/HomePage"))
const LoginPage = React.lazy(() => import("../../pages/LoginPage/LoginPage"))
const RegisterPage = React.lazy(() => import("../../pages/RegisterPage/RegisterPage"))
const ProfilePage = React.lazy(() => import("../../pages/ProfilePage/ProfilePage"))

export interface RouteType{
    index?: boolean
    path: string
    component: ComponentType
}

enum RoutesNames{
    Home = "/",
    Login = "/login",
    Register = "/register",
    Profile = "/profile"
}

export const publicRoutes: RouteType[] = [
    {index: true, path: RoutesNames.Home, component: HomePage},
    {path: RoutesNames.Login, component: LoginPage},
    {path: RoutesNames.Register, component: RegisterPage},
]

export const privateRoutes: RouteType[] = [
    {path: RoutesNames.Profile, component: ProfilePage}
]