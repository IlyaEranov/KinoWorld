import AppRouter from "./router/AppRouter"
import "./style/global.scss"
import AppLoader from "./components/ui/HOC/AppLoader/AppLoader"
import { Suspense } from "react"

function App() {
    return (
        <Suspense>
            <AppLoader>
                <AppRouter />
            </AppLoader>
        </Suspense>
    )
}

export default App