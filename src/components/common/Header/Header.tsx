import { Link } from "react-router-dom"
import Button from "../../ui/Buttons/Button/Button"
import SearchButton from "../../ui/Buttons/SearchButton/SearchButton"
import NavBar from "../NavBar/NavBar"
import s from "./Header.module.scss"

function Header(){
    return(
        <header className={s.header}>
            <Link to={"/"} className={s.logo}><div>КИНОМИР</div></Link>
            <NavBar/>
            <div className={s.buttons}>
                <SearchButton/>
                <Link className={s.a} to={"/register"}><Button>Регистрация</Button></Link>
                <Link className={s.a} to={"/login"}><Button inverted>Вход</Button></Link>
            </div>
        </header>
    )
}

export default Header