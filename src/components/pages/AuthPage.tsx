import type { FC } from "react"

interface AuthPageProps{
    type: string
}

const AuthPage: FC<AuthPageProps> = ({type}) => {
    return(
        <>
            auth type: {type}
        </>
    )
}

export default AuthPage