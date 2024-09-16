import { ComponentType } from "react"
import HomePage from "../../pages/HomePage/HomePage"
import LoginPage from "../../pages/LoginPage/LoginPage"
import RegisterPage from "../../pages/RegisterPage/RegisterPage"
import ProfilePage from "../../pages/ProfilePage/ProfilePage"

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