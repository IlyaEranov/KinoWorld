import { Navigate, useParams } from "react-router-dom"
import KinoByIdPage from "../pages/KinoByIdPage"
import KinoPage from "../pages/KinoPage"

function RedirectToWatch(){

    const {type, id} = useParams()

    return(
        <>{
            (type && id) ? <KinoByIdPage id={id}/> : 
            (type == "movies" || type == "series" || type == "animations") ?
            <KinoPage type={type}/> : <Navigate to={"/"}/>
        }</>
    )
}

export default RedirectToWatch