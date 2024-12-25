import { Link } from "react-router-dom"
import s from "./Footer.module.scss"
import { NavLink } from "react-router-dom"
import ctaBackgroundImage from "../../../assets/images/ff0d0aaa3c99bebaf1def49db0cb822c.jpg"
import Button from "../../ui/Button/Button"

function Footer(){
    return(
        <>
        <section className={s.cta}>
            <div className={s.content_cta}>
                <h1 className={s.h1}>Связаться с нами</h1>
                <p className={s.p}>У вас есть вопрос? Мы с удовольствием ответим на него. Отправьте сообщение и мы ответим на него как можно скорее</p>
            </div>
            <div className={s.button_container}><Button>Отправить сообщение</Button></div>
            <img className={s.image} src={ctaBackgroundImage}/>
        </section>
        <footer>
            <div className={s.content}>
                <div className={s.description}>
                    <Link to={"/"} className={s.logo}>КИНОМИР</Link>
                    <p className={s.p}>где каждый кадр рассказывает историю, а каждый щелчок открывает дверь в мир безграничных развлечений. Погрузитесь во вселенную непревзойденного кино.</p>
                </div>
                <div className={s.list}>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Главная</NavLink>
                        </li>
                        <li>
                            <Link to={"/films"}>Фильмы</Link>
                        </li>
                        <li>
                            <Link to={"/series"}>Сериалы</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>О нас</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.bottom_content}>
                <span>© 2024 КИНОМИР все права защищены</span>
                <div className={s.links}>
                    <Link to="https://www.kinopoisk.ru/legal/recommendations/ru/#kinopoisk">Правила и условия</Link>
                    <div className={s.elipse}></div>
                    <Link to="https://yandex.ru/legal/kinopoisk_vod">Политика Конфиденциальности</Link>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer