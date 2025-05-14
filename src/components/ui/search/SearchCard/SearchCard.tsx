import type { FC } from "react"
import { Link } from "react-router-dom"
import s from "./SearchCard.module.scss"
import { kinoUtil } from "../../../../util/kino"

interface SearchCardProps{
    id: string
    type: string
    name: string
    image: string
    rating: number
    year: number
}

const SearchCard: FC<SearchCardProps> = ({id, type, name, image, rating, year}) => {
    return (
        <Link className={s["search-card"]} to={`/watch/${type}/${id}`}>
            <img className={s["search-card__image"]} src={image} alt={name} />
            <div className={s["search-card__content"]}>
                <h4>{name}</h4>
                <div className={s["search-card__description"]}>
                    <span className={s["search-card__rating"]}
                        style={{
                            color: kinoUtil.ratingColor(rating)
                        }}
                    >
                        {rating}
                    </span>
                    <p>{kinoUtil.ru(type)}</p>
                    <p>{year}</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard