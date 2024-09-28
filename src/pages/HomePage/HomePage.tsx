import Layout from "../../components/common/Layout/Layout"
import CategoriesSection from "../../components/modules/CategoriesSection/CategoriesSection"
import HeroSection from "../../components/modules/HeroSection/HeroSection"

function HomePage(){
    return(
        <Layout>
            <HeroSection/>
            <CategoriesSection/>
        </Layout>
    )
}

export default HomePage