import type { FC } from "react"
import s from "./CloseButton.module.scss"
import close from "../../../../assets/icons/close.svg"

interface CloseButtonProps{
    onClose: () => void
}

const CloseButton: FC<CloseButtonProps> = ({onClose}) => {
    return(
        <button className={s["close-button"]} onClick={onClose}>
            <img className={s["close-button__icon"]} src={close}/>
        </button>
    )
}

export default CloseButton