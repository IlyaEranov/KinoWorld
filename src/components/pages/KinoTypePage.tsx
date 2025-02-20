import { FC } from "react"

interface KinoTypePageProps{
    type: string
}

const KinoTypePage: FC<KinoTypePageProps> = ({type}) => {
    return(
        <>
            {type}
        </>
    )
}

export default KinoTypePage