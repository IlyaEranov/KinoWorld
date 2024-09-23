import { Suspense } from "react"
import AppRouter from "./router/AppRouter"
import "../styles/global.scss"

function App(){
    return(
        <Suspense>
            <AppRouter/>
        </Suspense>
    )
}

export default App