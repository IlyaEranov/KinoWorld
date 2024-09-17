import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { registerUser } from "../../../store/reducers/UserSlice"

function RegisterForm() {

    const dispatch = useAppDispatch()
    const {authError} = useAppSelector(state => state.UserReducer)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(registerUser({email, name, password}))
    }

    return (
        <>
            <form>
                <input
                    placeholder="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
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
                <button onClick={handlerSubmit}>Зарешестрироваться</button>
            </form>
            {authError && <div>{authError}</div>}
        </>
    )
}

export default RegisterForm