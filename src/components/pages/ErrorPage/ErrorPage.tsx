import type { FC } from "react"

interface ErrorPageProps{
    message: string
}

const ErrorPage: FC<ErrorPageProps> = ({message}) => {
    return(
        <div>{message}</div>
    )
}

export default ErrorPage