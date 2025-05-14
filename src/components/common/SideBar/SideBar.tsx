import s from "./SideBar.module.scss"
import { useState } from "react"
import { navLinks } from "../../../router/routes"
import { Link } from "react-router-dom"
import SideBarButton from "../Buttons/SideBarButton/SideBarButton"


function SideBar() {

    const [isActive, setActive] = useState(false)

    const isAuth = false

    return (
        <>
            <SideBarButton active={isActive} onOpen={() => setActive(true)} onClose={() => setActive(false)} />
            <div className={isActive ? `${s.sidebar} ${s._active}` : s.sidebar}>
                <ul className={s.sidebar__wrapper}>
                    {navLinks.map(e =>
                        <li key={e.name} className={s.sidebar__item}>
                            <Link
                                to={e.path}
                            >{e.name}</Link>
                        </li>
                    )}
                    {isAuth ?
                        <li key={"Профиль"} className={s.sidebar__item}>
                            <Link to={"/"}>
                                Профиль
                            </Link>
                        </li>
                        :
                        <li key={"Войти"} className={s.sidebar__item}>
                            <Link to={"/auth/login"}>
                                Войти
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default SideBar