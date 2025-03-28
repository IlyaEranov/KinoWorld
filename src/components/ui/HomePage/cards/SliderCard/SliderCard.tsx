import { FaCirclePlay } from "react-icons/fa6"
import s from "./SliderCard.module.scss"
import Button from "../../../../common/Buttons/Button/Button"
import React, { FC } from "react"
import { Link } from "react-router-dom"
import { kinoUtil } from "../../../../../utils/kinoUtil"
import { KinoCardProps } from "../../../../../types/KinoCard"

const SliderCard: FC<KinoCardProps> = ({ id, name, description, image, type}) => {
    return (
        <>
            <div className={s.content}>
                <div className={s.description}>
                    <h1 className={s.h1}>{name}</h1>
                    <p className={s.p}>{description}</p>
                </div>
                <div className={s.buttons}>
                    <Button><span>Смотреть трейлер</span><FaCirclePlay /></Button>
                    <Link to={`/watch/${kinoUtil.linkType(type)}/${id}`}><Button type="inverted">Детали</Button></Link>
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

export default React.memo(SliderCard)