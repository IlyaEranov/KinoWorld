import { FC } from "react"
import s from "./SearchField.module.scss"
import { FiSearch } from "react-icons/fi"

interface SearchFieldProps{
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<SearchFieldProps> = ({placeholder, onChange}) => {
    return(
        <div className={s.search}>
            <FiSearch className={s.icon}/>
            <input
                className={s.input}
                placeholder={placeholder}
                type="text"
                onChange={onChange}
            />
        </div>
    )
}

export default SearchField