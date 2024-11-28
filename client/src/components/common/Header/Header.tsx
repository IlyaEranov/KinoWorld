import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"
import { Link } from "react-router-dom"
import Button from "../../ui/Button/Button"
import { FiSearch } from "react-icons/fi"

function Header(){
    return(
        <header>
            <div className={s.logo}>
                <span>КИНОМИР</span>
            </div>
            <nav>
                <NavLink to={"/"} className={s.a}>Главная</NavLink>
                <NavLink to={"/"} className={s.a}>Фильмы</NavLink>
                <NavLink to={"/"} className={s.a}>Сериалы</NavLink>
                <NavLink to={"/"} className={s.a}>О нас</NavLink>
            </nav>
            <div className={s.buttons}>
                <div className={s.search__icon}>
                    <FiSearch className={s.icon}/>
                </div>
                <Link to={"/register"}>
                    <Button>Регистрация</Button>
                </Link>
                <Link to={"/login"}>
                    <Button buttonType="inverted">Вход</Button>
                </Link>  
            </div>
        </header>
    )
}

export default Header