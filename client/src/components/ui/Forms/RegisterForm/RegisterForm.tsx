import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { registerUser, resetAuthError } from "../../../../store/reducers/UserSlice"
import { useValidate } from "../../../../hooks/useValidate"
import s from "../AuthForms.module.scss"
import style from "./RegisterForm.module.scss"
import { Link } from "react-router-dom"
import InputField from "../../Fields/InputField/InputField"
import Button from "../../Button/Button"
import icon from "../../../../assets/icons/media/google.svg"

const initialData = {
    email: "",
    name: "",
    password: ""
}

function RegisterForm() {

    const dispatch = useAppDispatch()
    const {authError} = useAppSelector(state => state.UserReducer)

    const {data, setData, validate, validateErrors} = useValidate(initialData)

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(validate()){
            dispatch(registerUser(data))
        } else {
            setData(initialData)
        }
    }

    return (
        <div className={style.content}>
            <div className={s.logo}>КИНОМИР</div>
            <div className={s.title}>Присоединяйтесь к кино сообществу</div>
            <form className={s.form}>
                <InputField
                    label={"Имя пользователя"}
                    placeholder={"Введите имя пользователя"}
                    value={data.name}
                    type={"text"}
                    onChange={e => {
                        setData({
                            ...data,
                            name: e.target.value
                        })
                        dispatch(resetAuthError())
                    }}
                />
                {validateErrors["name"] && <div>{validateErrors["name"]}</div>}
                <InputField
                    label={"Email"}
                    placeholder={"example@email.com"}
                    value={data.email}
                    type={"email"}
                    onChange={e => {
                        setData({
                            ...data,
                            email: e.target.value
                        })
                        dispatch(resetAuthError())
                    }}
                />
                {validateErrors["email"] && <div>{validateErrors["email"]}</div>}
                <InputField
                    label={"Пароль"}
                    placeholder={"Введите пароль"}
                    value={data.password}
                    type={"password"}
                    onChange={e => {
                        setData({
                            ...data,
                            password: e.target.value
                        })
                        dispatch(resetAuthError())
                    }}
                />
                {validateErrors["password"] && <div>{validateErrors["password"]}</div>}
                <p className={s.p}>Пароль не менее 8 символов</p>
            </form>
            <div className={s.buttons}>
                <Button onClick={handlerSubmit}>Зарегестрироваться</Button>
                <Button buttonType="dark"><img src={icon} className={s.icon}/><span>Зарегестрироваться с помощью google</span></Button>
            </div>
            <div className={s.description}>
                <span>Уже есть аккаунт?</span>
                <Link to={"/login"} className={s.a}>Войти</Link>
            </div>
            {authError && <div>{authError}</div>}
        </div>
    )
}

export default RegisterForm