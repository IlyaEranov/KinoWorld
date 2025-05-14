import { Link } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import s from "./Header.module.scss"
import SideBar from "../SideBar/SideBar"
import Button from "../Buttons/Button/Button"
import SearchBar from "../../ui/search/SearchBar/SearchBar"

function Header() {

    const isAuth = false

    return (
        <header>
            <Link to={"/"} className={s.header__logo}>
                <h2 className={s.logo}>КИНОМИР</h2>
            </Link>
            <NavBar/>
            <div className={s.header__buttons}>
                <SearchBar/>
                {isAuth ?
                    <Button>Профиль</Button>
                    :
                    <>
                        <Link to={"/auth/login"} className={`${s.header__buttons_hidden}`}>
                            <Button>Войти</Button>
                        </Link>
                        <Link to={"/auth/register"} className={`${s.header__buttons_hidden}`}>
                            <Button style={"inverted"}>Регестрация</Button>
                        </Link>
                    </>
                }
                <SideBar/>
            </div>
        </header>
    )
}

export default Header