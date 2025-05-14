import type { FC } from "react"
import menu from "../../../../assets/icons/menu.svg"
import close from "../../../../assets/icons/close.svg"
import s from "./SideBarButton.module.scss"

interface SideBarButtonProps{
    active: boolean
    onOpen: () => void
    onClose: () => void
}

const SideBarButton: FC<SideBarButtonProps> = ({active, onOpen, onClose}) => {
    return(
        <button className={s.menu__button} onClick={active ? onClose : onOpen}>
            <img className={s.menu__icon} src={active ? close : menu}/>
        </button>
    )
}

export default SideBarButton