enum ValidatorErrors{
    isEmail = "Введен неккоректный email",
    isPassword = "Пароль должен содеражать не менее 6 символов и включать как минимум 1 цифру, 1 заглавную и одну строчную латинские буквы, а также 1 спец. символ",
    isName = "Имя пользователя не должно быть больше 16 символов",
    isRequired = "Заполните это поле"
}

const validate = (key: string, value: any) => {
    if(value.trim().length == 0){
        return ValidatorErrors.isRequired
    }
    switch(key){
        case "email":
            const emailRegExp = /^\S+@\S+\.\S+$/g
            return emailRegExp.test(value) ? null : ValidatorErrors.isEmail
        case "password":
            const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/g
            return passwordRegExp.test(value) ? null : ValidatorErrors.isPassword
        case "name":
            return value.length <= 16 ? null : ValidatorErrors.isName
        default:
            return null
    }
}

export function validator<T>(data: T){
    const errors: {[key: string]: any} = {}
    for(let key in data){
        let state = validate(key, data[key])
        if(state != null){
            errors[key] = state
        }
    }
    return errors
}