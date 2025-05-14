import type { FC, ReactNode } from "react"
import s from "./Button.module.scss"

interface ButtonProps{
    children: ReactNode
    onClick?: () => void
    style?: "dark" | "inverted"
}

const Button: FC<ButtonProps> = ({children, onClick, style}) => {
    return(
        <button className={`${s.button} ${s[`${style}`]}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button