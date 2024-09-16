import { Suspense } from "react"
import AppRouter from "./router/AppRouter"

function App(){
    return(
        <Suspense>
            <AppRouter/>
        </Suspense>
    )
}

export default App