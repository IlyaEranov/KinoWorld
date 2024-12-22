import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { loginUser, resetAuthError } from "../../../../store/reducers/UserSlice"
import { useValidate } from "../../../../hooks/useValidate"
import style from "./LoginForm.module.scss"
import s from "../AuthForms.module.scss"
import InputField from "../../Fields/InputField/InputField"
import Button from "../../Button/Button"
import icon from "../../../../assets/icons/media/google.svg"
import { Link} from "react-router-dom"

const initialData = {
    email: "",
    password: ""
}

function LoginForm() {

    const dispatch = useAppDispatch()
    const {authError} = useAppSelector(state => state.UserReducer)
    const {data, setData, validate, validateErrors} = useValidate(initialData)

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(validate()){
            dispatch(loginUser(data))
        } else {
            setData(initialData)
        }
    }

    return (
        <div className={style.content}>
            <div className={style.section}>
                <div className={s.logo}>КИНОМИР</div>
                <div className={s.title}>Получите доступ к миру кино</div>
            </div>
            <form className={s.form}>
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
            </form>
            <div className={s.buttons}>
                <Button onClick={handlerSubmit}>Войти</Button>
                <Button buttonType="dark"><img className={s.icon} src={icon}/><span>Войти с помощью google</span></Button>
            </div>
            <div className={s.description}>
                <span>Еще нет аккаунта?</span>
                <Link to={"/register"} className={s.a}>Зарегестрироваться</Link>
            </div>
            {authError && <div>{authError}</div>}
        </div>
    )
}

export default LoginForm