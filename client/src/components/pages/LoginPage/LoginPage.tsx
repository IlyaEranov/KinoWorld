import LoginForm from "../../ui/Forms/LoginForm/LoginForm"
import s from "./LoginPage.module.scss"
import loginImage from "../../../assets/images/loginImage.jpg"

function LoginPage(){
    return(
        <>
            <div className={s.container}>
                <LoginForm/>
            </div>
            <img className={s.image} src={loginImage}/>
        </>
        
    )
}

export default LoginPage