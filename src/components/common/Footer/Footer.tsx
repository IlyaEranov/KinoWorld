import { Link } from "react-router-dom"
import s from "./Footer.module.scss"
import { linkList } from "../../../router/routes"

function Footer(){
    return(
        <footer>
            <div className={s.content}>
                <div className={s.description}>
                    <Link to={"/"} className={s.logo}>КИНОМИР</Link>
                    <p className={s.p}>где каждый кадр рассказывает историю, а каждый щелчок открывает дверь в мир безграничных развлечений. Погрузитесь во вселенную непревзойденного кино.</p>
                </div>
                <ul className={s.list}>
                    {linkList.map((e, i) => <li key={i}><Link to={e.path}>{e.value}</Link></li>)}
                </ul>
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
    )
}

export default Footer