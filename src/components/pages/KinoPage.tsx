import { FC } from "react"

interface KinoPageProps{
    type: string
}

const KinoPage: FC<KinoPageProps> = ({type}) => {
    return(
        <>{type}</>
    )
}

export default KinoPage