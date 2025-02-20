import { FC, ReactNode } from "react"
import s from "./Modal.module.scss"
import { AiOutlineClose } from "react-icons/ai"

interface ModalProps{
    children: ReactNode
    onClose: () => void
}

const Modal: FC<ModalProps> = ({children, onClose}) => {
    return(
        <div className={s.backdrop} onClick={onClose}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            <AiOutlineClose className={s.close} onClick={onClose}/>
        </div>
    )
}

export default Modal