import type { FC } from "react"
import s from "./SearchField.module.scss"
import search from "../../../../assets/icons/search.svg"

interface SearchFieldProps {
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<SearchFieldProps> = ({ placeholder, onChange }) => {
    return (
        <div className={s.search}>
            <img src={search} className={s.search__icon}/>
            <input
                className={s.search__field}
                type="text"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>

    )
}

export default SearchField