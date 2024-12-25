import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"
import { Link } from "react-router-dom"
import Button from "../../ui/Button/Button"
import { FiSearch } from "react-icons/fi"


function Header(){
    return(
        <header>
            <div className={s.logo}>
                <Link to={"/"}>КИНОМИР</Link>
            </div>
            <nav>
                <NavLink 
                    to={"/"} 
                    className={({isActive}) => [
                        isActive ? s.active : "",
                    ].join(" ")}
                >
                    Главная
                </NavLink>
                <NavLink
                    to={"/films"}
                    className={({isActive}) => [
                        isActive ? s.active : "",
                    ].join(" ")}
                >
                    Фильмы
                </NavLink>
                <NavLink 
                    to={"/series"}
                    className={({isActive}) => [
                        isActive ? s.active : "",
                    ].join(" ")}
                >
                    Сериалы
                </NavLink>
                <NavLink 
                    to={"/about"} 
                    className={({isActive}) => [
                        isActive ? s.active : "",
                    ].join(" ")}
                >
                    О нас
                </NavLink>
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