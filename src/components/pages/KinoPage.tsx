import type { FC } from "react"

interface KinoPageProps{
    type: string
}

const KinoPage: FC<KinoPageProps> = ({type}) => {
    return(
        <>
            only type: {type}
        </>
    )
}

export default KinoPage