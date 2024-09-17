import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { loginUser } from "../../../store/reducers/UserSlice"

function LoginForm() {

    const dispatch = useAppDispatch()
    const {authError} = useAppSelector(state => state.UserReducer)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(loginUser({email, password}))
    }

    return (
        <>
            <form>
                <input
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={handlerSubmit}>Войти</button>
            </form>
            {authError && <div>{authError}</div>}
        </>
    )
}

export default LoginForm