import { FC, ReactNode } from "react"
import s from "./Button.module.scss"

interface ButtonProps{
    children: ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    buttonType?: string
}

const Button: FC<ButtonProps> = ({children, onClick, buttonType}) => {
    return(
        <button onClick={onClick} className={
            buttonType == "dark"
            ? `${s.button} ${s.dark}`
            : buttonType == "inverted"
            ? `${s.button} ${s.inverted}`
            : s.button
        }>
            {children}
        </button>
    )
}

export default Button