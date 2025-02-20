import { FC } from "react"
import s from "./ErrorPage.module.scss"

interface ErrorPageProps{
    message: string
}

const ErrorPage: FC<ErrorPageProps> = ({message}) => {
    return(
        <div className={s.message}>{message}</div>
    )
}

export default ErrorPage