import { NavLink } from "react-router-dom"
import s from "./NavBar.module.scss"

function NavBar(){
    return(
        <nav className={s.nav}>
            <NavLink className={s.a} to={"/"}>
                Главная
            </NavLink>
            <NavLink className={s.a} to={"/movies"}>
                Фильмы
            </NavLink>
            <NavLink className={s.a} to={"/tv-series"}>
                Сериалы
            </NavLink>
        </nav>
    )
}

export default NavBar