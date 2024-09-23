import Layout from "../../components/common/Layout/Layout"
import Button from "../../components/ui/Buttons/Button/Button"
import s from "./HomePage.module.scss"
import play from "../../assets/icons/play-circle.svg"
import testimage from "../../assets/images/testimage.jpg"

function HomePage(){
    return(
        <Layout>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.description}>
                        <h1 className={s.h1}>
                            Solaris Synchrony: a Celestial Odyssey of Hope and Harmony
                        </h1>
                        <p className={s.p}>
                            Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan to synchronize the consciousness of humanity with a new solar system. "Solaris Synchrony" is a gripping tale of sacrifice, hope, and the unyielding spirit of exploration.
                        </p>
                    </div>
                    <div className={s.buttons}>
                        <Button><span>Смотреть трейлер</span><img className={s.play} src={play}/></Button>
                        <Button inverted>Детали</Button>
                    </div>
                </div>
                <div className={s.indicators}></div>
                <div className={s.container__image}>
                    <img className={s.preview} src={testimage}/>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage