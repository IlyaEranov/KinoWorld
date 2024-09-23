import { FC, ReactNode } from "react"
import Header from "../Header/Header"
import s from "./Layout.module.scss"

interface LayoutProps{
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Header/>
            <main className={s.main}>
                {children}
            </main>
        </>
    )
}

export default Layout