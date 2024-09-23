import { FC, ReactNode } from "react"
import s from "./Button.module.scss"

interface ButtonProps{
    children: ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    inverted?: boolean
    dark?: boolean
}

const Button: FC<ButtonProps> = ({children, onClick, inverted, dark}) => {
    return (
        <button
            className={inverted ? `${s.button} ${s.inverted}` : dark ? `${s.button} ${s.dark}` : s.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button