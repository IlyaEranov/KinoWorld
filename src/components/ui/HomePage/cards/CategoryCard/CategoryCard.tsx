import { FC } from "react"
import s from "./CategoryCard.module.scss"
import { Link } from "react-router-dom"
import { kinoUtil } from "../../../../../utils/kinoUtil"

interface KinoCardProps{
    id: string
    image: string
    name: string
    description: string
    type: string
}

const CategoryCard: FC<KinoCardProps> = ({image, name, description, type, id}) => {
    return(
        <Link to={`/watch/${kinoUtil.linkType(type)}/${id}`} className={s.card}>
            <img className={s.image} src={image}/>
            <div className={s.description}>
                <h2 className={s.h2}>{name}</h2>
                <p className={s.p}>{description}</p>
            </div>
        </Link>
    )
}

export default CategoryCard