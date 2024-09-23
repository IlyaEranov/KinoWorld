import s from "./RegisterPage.module.scss"
import RegisterForm from "../../components/ui/Forms/RegisterForm/RegisterForm"
import registerImage from "../../assets/images/registerImage.jpg"

function RegisterPage(){
    return(
        <div className={s.container}>
            <div className={s.container__form}>
                <RegisterForm/>
            </div>
            <img src={registerImage} className={s.image}/>
        </div>
    )
}

export default RegisterPage