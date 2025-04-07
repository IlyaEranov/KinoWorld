import { FC } from "react"
import s from "./SliderCard.module.scss"
import Button from "../../../../common/Buttons/Button/Button"
import { Link } from "react-router-dom"
import { generateLinkToWatch } from "../../../../../router/routes"
import { FaCirclePlay } from "react-icons/fa6"

interface SliderCardProps{
    id: string
    name: string
    description: string
    image?: string | undefined
    type: string
}

const SliderCard: FC<SliderCardProps> = ({id, name, description, image, type}) => {
    return (
        <>
            <div className={s.content}>
                <div className={s.description}>
                    <h1 className={s.h1}>{name}</h1>
                    <p className={s.p}>{description}</p>
                </div>
                <div className={s.buttons}>
                    <Button><span>Смотреть трейлер</span><FaCirclePlay/></Button>
                    <Link to={generateLinkToWatch(type, id)}><Button type="inverted">Детали</Button></Link>
                </div>
            </div>
            <div className={s.container}>
                {image && <img className={s.image} src={image}/>}
                <div className={s.shadow}></div>
                <div className={s.shadow__border}></div>
            </div>
        </>
    )
}

export default SliderCard