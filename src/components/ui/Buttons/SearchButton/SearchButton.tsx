import icon from "../../../../assets/icons/search-normal.svg"
import s from "./SearchButton.module.scss"

function SearchButton(){
    return(
        <button className={s.button}>
            <img src={icon} className={s.icon}/>
        </button>
    )
}

export default SearchButton