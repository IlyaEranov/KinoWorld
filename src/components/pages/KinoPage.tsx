import { FC } from "react"
import Layout from "../common/Layout/Layout"
import { KinoType } from "../../types/KinoType"
import HeroSection from "../ui/sections/HeroSection/HeroSection"


interface KinoPageProps{
    type: KinoType
}

const KinoPage: FC<KinoPageProps> = ({type}) => {
    return(
        <Layout>
            <HeroSection type={type}/>
        </Layout>
    )
}

export default KinoPage