import s from "./HeroSection.module.scss"
import { useAppSelector } from "../../../hooks/redux"
import Button from "../../ui/Button/Button"
import { FaCirclePlay } from "react-icons/fa6"
import React, { useEffect, useState } from "react"

function HeroSection(){

    const [current, setCurrent] = useState(0)

    const {entities, error} = useAppSelector(state => state.KinoReducer)
    
    const preloadImages = () => {
        entities?.docs.map(e => new Image().src = e.backdrop.url)
    }

    useEffect(() => {
        if(entities){
            preloadImages()
        }
    }, [])

    return(
        <div className={s.container}>
        {entities && <>
            <div className={s.content}>
                <div className={s.description}>
                    <h1 className={s.h1}>{entities.docs[current].name}</h1>
                    <p className={s.p}>{entities.docs[current].description}</p>
                </div>
                <div className={s.buttons}>
                    <Button><span>Смотреть трейлер</span><FaCirclePlay/></Button>
                    <Button buttonType="inverted">Детали</Button>
                </div>
            </div>
            <div className={s.list__indicator}>
                {entities.docs.map((_, i) => i == current ?
                    <div key={i} className={`${s.indicator} ${s.active}`}></div> :
                    <div
                        key={i}
                        className={s.indicator}
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.preventDefault()
                            setCurrent(i)
                        }}
                    ></div>
                )}
            </div>
            <div className={s.container__image}>
                <img className={s.image} src={entities.docs[current].backdrop.url}/>
                <div className={s.shadow}></div>
                <div className={s.shadow__border}></div>
            </div>
        </>}
        {error && <div className={s.error}>{error}</div>}
    </div>
    )
}

export default React.memo(HeroSection)