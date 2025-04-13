import React, { FC } from "react"
import { KinoCardProps } from "../../../../types/KinoCard"
import s from "./SliderCard.module.scss"
import Button from "../../../common/Buttons/Button/Button"
import { Link } from "react-router-dom"
import { generateLinkToWatch } from "../../../../router/routes"
import { FaCirclePlay } from "react-icons/fa6"

const SliderCard: FC<KinoCardProps> = ({id, type, name, description, image, HomePageSlider}) => {
    return(
        <>
            <div className={`${s.content} ${HomePageSlider ? s.home : s.default}`}>
                <div className={s.description}>
                    <h1 className={s.h1}>{name}</h1>
                    <p className={s.p}>{description}</p>
                </div>
                <div className={s.buttons}>
                    <Button><span>Смотреть трейлер</span><FaCirclePlay/></Button>
                    <Link to={generateLinkToWatch(type, id)}><Button type="inverted">Детали</Button></Link>
                </div>
            </div>
            <div className={`${s.image_container} ${HomePageSlider ? s.home : s.default}`}>
                {image && <img className={`${s.image} ${HomePageSlider ? s.home : s.default}`} src={image}/>}
                <div className={s.shadow}></div>
                <div className={s.shadow__border}></div>
            </div>
        </>
    )
}

export default React.memo(SliderCard)