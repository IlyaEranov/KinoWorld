import { Link } from "react-router-dom"
import s from "./Header.module.scss"
import { linkList, pathsLinks } from "../../../router/routes"
import { NavLink } from "react-router-dom"
import SearchButton from "../Buttons/SearchButton/SearchButton"
import Button from "../Buttons/Button/Button"

function Header(){
    return(
        <header>
            <div className={s.logo}>
                <Link to={pathsLinks.Home}>КИНОМИР</Link>
            </div>
            <nav>
                {linkList.map((e, i) => 
                    <NavLink
                        key={i}
                        to={e.path}
                        className={({isActive}) => [
                            isActive ? s.active : ""
                        ].join("")}
                    >{e.value}</NavLink>
                )}
            </nav>
            <div className={s.buttons}>
                <SearchButton/>
                <Link to={"/auth/login"}><Button>Регестрация</Button></Link>
                <Link to={"/auth/register"}><Button type="inverted">Войти</Button></Link>
            </div>
        </header>
    )
}

export default Header