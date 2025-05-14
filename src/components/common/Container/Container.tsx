import type { FC, ReactNode } from "react"

interface ContainerProps{
    children: ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return(
        <section>{children}</section>
    )
}

export default Container