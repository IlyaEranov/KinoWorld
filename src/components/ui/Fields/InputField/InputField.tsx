import { FC } from "react";
import s from "./InputField.module.scss"

interface InputFieldProps{
    label?: string
    placeholder?: string
    value?: string
    type: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

const InputField: FC<InputFieldProps> = ({label, placeholder, value, type, onChange}) => {
    return(
        <div className={s.field}>
            {label && <label className={s.label}>{label}<span className={s.span}>*</span></label>}
            <input
                className={s.input}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField