import Layout from "../../common/Layout/Layout"
import CategorySection from "../../modules/CategorySection/CategorySection"
import HeroSection from "../../modules/HeroSection/HeroSection"

function HomePage(){
    return(
        <Layout>
            <HeroSection/>
            <CategorySection/>
        </Layout>
    )
}

export default HomePage