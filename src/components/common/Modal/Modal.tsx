import s from "./Modal.module.scss"
import type { FC, ReactNode } from "react"
import close from "../../../assets/icons/close.svg"

interface ModalProps{
    children: ReactNode
    onClose: () => void
    active: boolean
}

const Modal: FC<ModalProps> = ({children, onClose, active}) => {
    return(
        <div className={active ? `${s.modal__backdrop} ${s._active}` : s.modal__backdrop} onClick={onClose}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            <button className={s.modal__button} onClick={onClose}>
                <img className={s.close__icon} src={close} alt="Закрыть"/>
            </button>
        </div>
    )
}

export default Modal