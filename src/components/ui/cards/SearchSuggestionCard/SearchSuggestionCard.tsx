import { FC } from "react"
import s from "./SearchSuggestionCard.module.scss"
import { kinoUtil } from "../../../../utils/kinoUtil"
import { Link } from "react-router-dom"

interface SearchSuggestionCardProps{
    id: string
    image: string
    name: string
    rating: number
    type: string
    year: number
}

const SearchSuggestionCard: FC<SearchSuggestionCardProps> = ({id, image, name, rating, type, year}) => {
    return(
        <Link to={`/watch/${kinoUtil.linkType(type)}/${id}`} className={s.card}>
            <img className={s.image} src={image}/>
            <div className={s.description}>
                <h4>{name}</h4>
                <div className={s.row}>
                    <span className={s.rating} style={{
                        color: kinoUtil.ratingColor(rating)
                    }}>{rating}</span>
                    <p>{kinoUtil.typeKino(type)},</p>
                    <p>{year}</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchSuggestionCard