import { FC } from "react"
import KinoTypeSection from "../ui/sections/KinoTypeSection/KinoTypeSection"
import Container from "../common/Container/Container"

interface KinoTypePageProps{
    type: string
}

const KinoTypePage: FC<KinoTypePageProps> = ({type}) => {
    return(
        <Container>
            <KinoTypeSection/>
        </Container>
    )
}

export default KinoTypePage