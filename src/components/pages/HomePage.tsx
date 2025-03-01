import Layout from "../common/Layout/Layout"
import CTA from "../ui/HomePage/sections/CTA/CTA"
import CategorySection from "../ui/HomePage/sections/CategorySection/CategorySection"
import CompilationSection from "../ui/HomePage/sections/CompilationSection/CompilationSection"
import HeroSection from "../ui/HomePage/sections/HeroSection/HeroSection"

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