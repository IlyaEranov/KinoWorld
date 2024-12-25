import AppRouter from "./router/AppRouter"
import "./style/global.scss"
import AppLoader from "./components/ui/HOC/AppLoader/AppLoader"
import { Suspense } from "react"
import Spinner from "./components/ui/HOC/Spinner/Spinner"

function App() {
    return (
        <Suspense fallback={<Spinner/>}>
            <AppLoader>
                <AppRouter />
            </AppLoader>
        </Suspense>
    )
}

export default App