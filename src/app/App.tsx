import { Suspense } from "react"
import AppRouter from "./router/AppRouter"
import "../styles/global.scss"
import AppLoader from "../components/ui/HOC/AppLoader/AppLoader"

function App(){
    return(
        <Suspense fallback={<AppLoader/>}>
            <AppRouter/>
        </Suspense>
    )
}

export default App