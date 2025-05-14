import AppLoader from "./components/HOC/AppLoader"
import AppRouter from "./router/AppRouter"
import "./styles/global.scss"

function App() {
    return (
        <AppLoader>
            <AppRouter/>
        </AppLoader>
    )
}

export default App
