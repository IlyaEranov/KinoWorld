import Layout from "../common/Layout/Layout"
import CTA from "../ui/sections/CTA/CTA"
import CategorySection from "../ui/sections/HomePage/CategorySection/CategorySection"
import HeroSection from "../ui/sections/HomePage/HeroSection/HeroSection"

function HomePage(){
    return(
        <Layout>
            <HeroSection/>
            <CategorySection/>
            <CTA/>
        </Layout>
    )
}

export default HomePage