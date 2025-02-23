import { Navigate, useParams } from "react-router-dom"
import KinoPage from "./KinoPage"
import Layout from "../common/Layout/Layout"
import KinoTypePage from "./KinoTypePage"

function WatchPage() {

    const { type, id } = useParams()

    return (
        <Layout>
            {(type && id) ? <KinoPage id={id}/> :
                (type && (type == "movies" || type == "series" || type == "animations")) ?
                <KinoTypePage type={type}/> : <Navigate to={"/"}/>}
        </Layout>
    )

}

export default WatchPage