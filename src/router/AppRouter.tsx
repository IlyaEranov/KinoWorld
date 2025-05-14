import type { ReactNode } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";

const Home = React.lazy(() => import("../components/pages/HomePage"))
const Kino = React.lazy(() => import("../components/layouts/kino"))
const Auth = React.lazy(() => import("../components/layouts/auth"))

const ProfilePage = React.lazy(() => import("../components/pages/ProfilePage"))

const pathNames = {
    Home: "/",
    Kino: "/watch/:type/:id?",
    Auth: "/auth/:type",
    Profile: "/profile/:userId"
}

interface RoutesType{
    index?: boolean
    path: string
    element: ReactNode
}

const publicRoutes: RoutesType[] = [
    {index: true, path: pathNames.Home, element: <Home/>},
    {path: pathNames.Kino, element: <Kino/>},
    {path: pathNames.Auth, element: <Auth/>}
]

const privateRoutes: RoutesType[] = [
    {path: pathNames.Profile, element: <ProfilePage/>}
] 

function AppRouter(){

    const isAuth = true

    return(
        <Routes>
            {isAuth && privateRoutes.map(e => <Route path={e.path} element={e.element}/>)}
            {publicRoutes.map(e => <Route index={e.index} path={e.path} element={e.element}/>)}
            <Route path="*" element={<ErrorPage message="Ошибка 404. Страница не найдена"/>}/>
        </Routes>
    )
}

export default AppRouter