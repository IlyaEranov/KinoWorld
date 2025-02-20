import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";

function AppRouter(){
    return(
        <Routes>
            {publicRoutes.map((e, i) => 
                <Route key={i} index={e.index} path={e.path} Component={e.component}/>    
            )}
            <Route path="*" element={<ErrorPage message={"Ошибка 404. Страница не найдена"}/>}/>
        </Routes>
    )
}

export default AppRouter