import { NavLink } from "react-router-dom"
import { navLinks } from "../../../router/routes"
import s from "./NavBar.module.scss"
import React from "react"

function NavBar(){
    return(
        <nav>
            <ul className={s.nav__wrapper}>
                {navLinks.map(e => 
                    <li key={e.name}>
                        <NavLink
                            to={e.path}
                            className={({isActive}) => [
                                isActive ? `${s.nav__link} ${s._active}` : s.nav__link 
                            ].join("")}
                        >{e.name}</NavLink>
                    </li>    
                )}
            </ul>
        </nav>
    )
}

export default React.memo(NavBar)