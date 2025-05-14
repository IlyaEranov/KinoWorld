import { Suspense, type FC, type ReactNode } from "react"
import Loader from "../Loader/Loader"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

interface LayoutProps{
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return(
        <Suspense fallback={<Loader/>}>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </Suspense>
    )
}

export default Layout