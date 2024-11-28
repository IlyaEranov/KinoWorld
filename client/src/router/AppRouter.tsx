import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import Page404 from "../components/pages/Page404/Page404";

function AppRouter(){

    const isAuth = true

    return(
        <Routes>
            {isAuth && privateRoutes.map(e => 
                <Route key={e.path} path={e.path} Component={e.component}></Route>
            )}
            {publicRoutes.map(e => 
                <Route key={e.path} index={e.index} path={e.path} Component={e.component}></Route>
            )}
            <Route path="*" Component={Page404}></Route>
        </Routes>
    )
}

export default AppRouter