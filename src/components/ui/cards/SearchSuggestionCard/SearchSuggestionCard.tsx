import { FC } from "react"
import s from "./SearchSuggestionCard.module.scss"
import { kinoUtil } from "../../../../utils/kinoUtil"

interface SearchSuggestionCardProps{
    image: string
    name: string
    rating: number
    type?: string
    year: number
}

const SearchSuggestionCard: FC<SearchSuggestionCardProps> = ({image, name, rating, type, year}) => {
    return(
        <div className={s.card}>
            <img className={s.image} src={image}/>
            <div className={s.description}>
                <h4>{name}</h4>
                <div className={s.row}>
                    <span className={s.rating} style={{
                        color: kinoUtil.ratingColor(rating)
                    }}>{rating}</span>
                    {type && <p>{kinoUtil.typeKino(type)},</p>}
                    <p>{year}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchSuggestionCard