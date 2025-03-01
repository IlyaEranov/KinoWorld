import Layout from "../common/Layout/Layout"
import CTA from "../ui/sections/CTA/CTA"
import CategorySection from "../ui/sections/HomePage/CategorySection/CategorySection"
import CompilationSection from "../ui/sections/HomePage/CompilationSection/CompilationSection"
import HeroSection from "../ui/sections/HomePage/HeroSection/HeroSection"

function HomePage(){
    return(
        <Layout>
            <HeroSection/>
            <CategorySection/>
            <CompilationSection/>
            <CTA/>
        </Layout>
    )
}

export default HomePage