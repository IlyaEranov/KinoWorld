import { FC, ReactNode } from "react"
import s from "./Container.module.scss"

interface ContainerProps{
    children: ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return(
        <section className={s.container}>
            {children}
        </section>
    )
}

export default Container