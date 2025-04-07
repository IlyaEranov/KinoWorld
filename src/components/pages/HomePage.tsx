import Layout from "../common/Layout/Layout"
import CTA from "../ui/HomePage/sections/CTA/CTA"
import HeroSection from "../ui/HomePage/sections/HeroSection/HeroSection"

function HomePage(){
    return(
        <Layout>
            <HeroSection/>
            <CTA/>
        </Layout>
    )
}

export default HomePage