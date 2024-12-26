import Layout from "../../common/Layout/Layout"
import CategorySection from "../../modules/CategorySection/CategorySection"
import HeroSection from "../../modules/HeroSection/HeroSection"
import TopSeriesSection from "../../modules/TopSeriesSection/TopSeriesSection"

function HomePage(){
    return(
        <Layout>
            <HeroSection/>
            <CategorySection/>
            <TopSeriesSection/>
        </Layout>
    )
}

export default HomePage