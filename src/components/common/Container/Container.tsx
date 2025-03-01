import { FC, ReactNode, useEffect, useState } from "react"
import s from "./Container.module.scss"

interface ContainerProps{
    children: ReactNode
    offset?: number
}

const Container: FC<ContainerProps> = ({children, offset}) => {

    const [isActive, setActive] = useState(false)

    useEffect(() => {
        if(offset){
            const scrollOffset = () => {
                if(pageYOffset >= offset){
                    setActive(true)
                } else {
                    setActive(false)
                }
                console.log(scrollY)
            }
            addEventListener("scroll", scrollOffset)
            return () => removeEventListener("scroll", scrollOffset)
        }
    }, [])

    return(
        <section className={
            offset ? 
            (isActive ? `${s.container} ${s.animation} ${s.active}` : `${s.container} ${s.animation}`) :
            s.container 
        }>
            {children}
        </section>
    )
}

export default Container