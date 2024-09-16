import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import Page404 from "../../pages/Page404/Page404";

function AppRouter(){

    const isLogged = true

    return(
        <Routes>
            {
                isLogged && privateRoutes.map(e => <Route key={e.path} path={e.path} Component={e.component}/>)
            }
            {
                publicRoutes.map(e => <Route index={e.index} key={e.path} path={e.path} Component={e.component}/>)
            }
            <Route path={"*"} Component={Page404}></Route>
        </Routes>
    )
}

export default AppRouter