import { FC, ReactNode } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import ScrollToUp from "../../../utils/ScrollToUp"


interface LayoutProps{
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
            <ScrollToUp/>
        </>
    )
}

export default Layout