import { Suspense } from "react"
import AppRouter from "./router/AppRouter"
import "./style/global.scss"
import Loader from "./components/common/Loader/Loader"
import AppLoader from "./components/HOC/AppLoader"

function App(){
  return(
    <Suspense fallback={<Loader/>}>
      <AppLoader>
        <AppRouter/>
      </AppLoader>
    </Suspense>
  )
}

export default App