import React, { ComponentType } from "react"

const HomePage = React.lazy(() => import("../components/pages/HomePage/HomePage"))
const LoginPage = React.lazy(() => import("../components/pages/LoginPage/LoginPage"))
const RegisterPage = React.lazy(() => import("../components/pages/RegisterPage/RegisterPage"))
const ProfilePage = React.lazy(() => import("../components/pages/ProfilePage/ProfilePage"))

interface RoutesType{
    index?: boolean
    path: string
    component: ComponentType
}

enum RouteName{
    Home = "/",
    Login = "/login",
    Register = "/register",
    Profile = "/profile"
}

export const publicRoutes: RoutesType[] = [
    {index: true, path: RouteName.Home, component: HomePage},
    {path: RouteName.Login, component: LoginPage},
    {path: RouteName.Register, component: RegisterPage}
]

export const privateRoutes: RoutesType[] = [
    {path: RouteName.Profile, component: ProfilePage}
]