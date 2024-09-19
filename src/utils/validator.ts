enum ValidatorErrors{
    isEmail = "Введен неккоректный email",
    isPassword = "Пароль должен быть не меньше 8 и не больше 16 символов, а также содержать хот",
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
            const passwordRegExp = /^[a-zA-Z0-9]{8,16}$/g
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