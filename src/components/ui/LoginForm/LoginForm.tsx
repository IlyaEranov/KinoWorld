import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { loginUser, resetAuthError } from "../../../store/reducers/UserSlice"
import { useForm } from "../../../hooks/useForm"

const initialData = {
    email: "",
    password: ""
}

function LoginForm() {

    const dispatch = useAppDispatch()
    const {authError} = useAppSelector(state => state.UserReducer)

    const {data, setData, validate, validateErrors} = useForm(initialData)

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(validate()){
            dispatch(loginUser(data))
        } else {
            setData(initialData)
        }
    }

    return (
        <>
            <form>
                <input
                    placeholder="email"
                    value={data.email}
                    onChange={e => {
                        setData({
                            ...data,
                            email: e.target.value
                        })
                        dispatch(resetAuthError())
                    }}
                />
                {validateErrors["email"] && <div>{validateErrors["email"]}</div>}
                <input
                    placeholder="password"
                    value={data.password}
                    onChange={e => {
                        setData({
                            ...data,
                            password: e.target.value
                        })
                        dispatch(resetAuthError())
                    }}
                />
                {validateErrors["password"] && <div>{validateErrors["password"]}</div>}
                <button onClick={handlerSubmit}>Войти</button>
            </form>
            {authError && <div>{authError}</div>}
        </>
    )
}

export default LoginForm