import Container from "../../common/Container/Container";
import Layout from "../../common/Layout/Layout";
import s from "./AboutPage.module.scss"

function AboutPage() {
    return (
        <Layout>
            <Container>
                <div className={s.content}>
                    <div className={s.description}>
                        <h1 className={s.h1}>КИНОМИР</h1>
                        <p className={s.p}>
                            Добро пожаловать в КИНОМИР – ваш гид в мире кино и сериалов! Мы – команда энтузиастов, которые любят кино так же сильно, как и вы. Наша цель - собрать для вас самые интересные и качественные фильмы и сериалы со всего мира, предлагая удобный и интуитивно понятный интерфейс для просмотра.
                        </p>
                        <h2 className={s.h2}>Наша миссия</h2>
                        <p className={s.p}>
                            Мы стремимся стать вашим надежным проводником в мире развлечений, предоставляя вам возможность находить и наслаждаться самыми лучшими фильмами и сериалами. Мы постоянно работаем над обновлением нашей коллекции и улучшением вашего пользовательского опыта.
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default AboutPage