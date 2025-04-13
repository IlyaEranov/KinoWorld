import { Navigate, useParams } from "react-router-dom"
import KinoByIdPage from "../pages/KinoByIdPage"
import KinoPage from "../pages/KinoPage"
import { KinoType } from "../../types/KinoType"

function RedirectToWatch(){

    const {type, id} = useParams<{type: KinoType, id: string}>()

    return(
        <>{
            (type && id) ? <KinoByIdPage id={id}/> : 
            (type == "movie" || type == "tv-series" || type == "cartoon") ?
            <KinoPage type={type}/> : <Navigate to={"/"}/>
        }</>
    )
}

export default RedirectToWatch