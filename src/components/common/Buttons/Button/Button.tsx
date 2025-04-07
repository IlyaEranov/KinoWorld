import { FC, ReactNode } from "react"
import s from "./Button.module.scss"

interface ButtonProps{
    type?: "dark" | "inverted"
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: ReactNode 
}

const Button: FC<ButtonProps> = ({children, onClick, type}) => {
    return (
        <button 
            onClick={onClick} 
            className={
                type == "dark" ? `${s.button} ${s.dark}` : 
                type == "inverted" ? `${s.button} ${s.inverted}`:
                s.button
            }
        >
            {children}
        </button>
    )
}

export default Button