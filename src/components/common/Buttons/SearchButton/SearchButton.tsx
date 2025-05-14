import s from "./SearchButton.module.scss"
import search from "../../../../assets/icons/search.svg"
import type { FC } from "react"

interface SearchButtonProps{
    onOpen: () => void
}

const SearchButton: FC<SearchButtonProps> = ({onOpen}) => {
    return(
        <button className={s.search__button} onClick={onOpen}>
            <img src={search} className={s.search__icon}/>
        </button>
    )
}

export default SearchButton