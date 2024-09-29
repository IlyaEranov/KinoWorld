import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
const Page404 = React.lazy(() => import("../../pages/Page404/Page404"))

function AppRouter(){

    const {isLogged} = useAppSelector(state => state.UserReducer)
    
    const navigate = useNavigate()

    useEffect(() => {
        if(isLogged){
            navigate("/profile", {replace: true})
        }
    }, [isLogged])

    return(
        <Routes>
            {isLogged && privateRoutes.map(e =>
                <Route key={e.path} path={e.path} Component={e.component}/>
            )}
            {publicRoutes.map(e => 
                <Route index={e.index} key={e.path} path={e.path} Component={e.component}/>
            )}
            <Route path={"*"} Component={Page404}></Route>
        </Routes>
    )
}

export default AppRouter