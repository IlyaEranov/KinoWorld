import { useState } from "react";
import { validator } from "../utils/validator";

export function useForm<T>(initialData: T){

    const [data, setData] = useState(initialData)
    const [validateErrors, setValidateErrors] = useState<{[key: string]: any}>({})

    const validate = () => {
        const stateValidate = validator(data)
        if(Object.keys(stateValidate).length == 0){
            return true
        } else {
            setValidateErrors(stateValidate)
            return false
        }
    }

    return {
        data,
        setData,
        validate,
        validateErrors
    }
}