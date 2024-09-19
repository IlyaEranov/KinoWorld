import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { registerUser, resetAuthError } from "../../../store/reducers/UserSlice"
import { useForm } from "../../../hooks/useForm"

const initialData = {
    email: "",
    name: "",
    password: ""
}

function RegisterForm() {

    const dispatch = useAppDispatch()
    const {authError} = useAppSelector(state => state.UserReducer)

    const {data, setData, validate, validateErrors} = useForm(initialData)

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(validate()){
            dispatch(registerUser(data))
        } else {
            setData(initialData)
        }
    }

    return (
        <>
            <form>
                <input
                    placeholder="name"
                    value={data.name}
                    onChange={e => {
                        setData({
                            ...data,
                            name: e.target.value
                        })
                        dispatch(resetAuthError())
                    }}
                />
                {validateErrors["name"] && <div>{validateErrors["name"]}</div>}
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
                <button onClick={handlerSubmit}>Зарегестрироваться</button>
            </form>
            {authError && <div>{authError}</div>}
        </>
    )
}

export default RegisterForm