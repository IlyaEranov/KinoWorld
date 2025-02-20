import { FC } from "react"
import s from "./KinoCard.module.scss"

interface KinoCardProps{
    image: string
    name: string
    description: string
}

const KinoCard: FC<KinoCardProps> = ({image, name, description}) => {
    return(
        <div className={s.card}>
            <img className={s.image} src={image}/>
            <div className={s.description}>
                <h2 className={s.h2}>{name}</h2>
                <p className={s.p}>{description}</p>
            </div>
        </div>
    )
}

export default KinoCard