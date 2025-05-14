import { Navigate, useParams } from "react-router-dom"
import type { KinoType } from "../../router/routes"
import KinoByIdPage from "../pages/KinoByIdPage"
import KinoPage from "../pages/KinoPage"

function Kino(){

    const {type, id} = useParams<{type: KinoType, id: string}>()

    return(
        <>
            {
                (type && id) ? <KinoByIdPage type={type} id={id}/> :
                (type == "movie" || type == "cartoon" || type == "tv-series") ? 
                <KinoPage type={type}/> : <Navigate to={"/"}/>
            }
        </>
    )
}

export default Kino