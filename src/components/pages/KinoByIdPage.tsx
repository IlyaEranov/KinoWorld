import type { FC } from "react"

interface KinoByIdPageProps{
    type: string
    id: string
}

const KinoByIdPage: FC<KinoByIdPageProps> = ({type, id}) => {
    return(
        <>
            {type}, {id}
        </>
    )
}

export default KinoByIdPage