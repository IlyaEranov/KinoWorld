import { Navigate, useParams } from "react-router-dom"
import type { AuthType } from "../../router/routes"
import AuthPage from "../pages/AuthPage"

function Auth(){

    const isAuth = false

    const {type} = useParams<{type: AuthType}>()

    return(
        <>
            {
                (isAuth) ? <Navigate to={`/profile/1`}/> : 
                (type == "login" || type == "register") ? <AuthPage type={type}/> : <Navigate to={"/"}/>
            }
        </>
    )
}

export default Auth