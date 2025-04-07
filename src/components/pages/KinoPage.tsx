import { FC } from "react"
import Layout from "../common/Layout/Layout"
import HeroSection from "../ui/KinoPage/sections/HeroSection/HeroSection"
import { KinoType } from "../../types/KinoType"


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