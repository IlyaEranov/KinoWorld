import React, { FC, ReactNode } from "react"
import s from "./Modal.module.scss"
import { AiOutlineClose } from "react-icons/ai"

interface ModalProps{
    children: ReactNode
    onClick: () => void
}

const Modal: FC<ModalProps> = React.memo(({children, onClick}) => {
    return(
        <div className={s.backdrop} onClick={onClick}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            <AiOutlineClose className={s.close} onClick={onClick}/>
        </div>
    )
})

export default Modal