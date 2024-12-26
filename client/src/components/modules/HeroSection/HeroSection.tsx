import s from "./HeroSection.module.scss"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import Button from "../../ui/Button/Button"
import { FaCirclePlay } from "react-icons/fa6"
import React, { useEffect } from "react"
import Container from "../../common/Container/Container"
import { useSlider } from "../../../hooks/useSlider"
import { resetLoading, setLoading } from "../../../store/reducers/KinoSlice"

const HeroSection = React.memo(() => {

    const limit = 5
    const dispatch = useAppDispatch()
    const { entitiesTop10 } = useAppSelector(state => state.KinoReducer)
    const {current, selectElement, images, setImages} = useSlider({limit, time: 5000})

    useEffect(() => {
        dispatch(setLoading())
        if (entitiesTop10) {
            let images: HTMLImageElement[] = []
            for (let i = 0; i < limit; i++) {
                let image = new Image()
                image.src = entitiesTop10.docs[i].backdrop.url
                images.push(image)
            }
            setImages(images)
            if(images.length){
                dispatch(resetLoading())
            }
        }
    }, [])

    return (
        <Container>
            {entitiesTop10 && <>
                <div className={s.content}>
                    <div className={s.description}>
                        <h1 className={s.h1}>{entitiesTop10.docs[current].name}</h1>
                        <p className={s.p}>{entitiesTop10.docs[current].description}</p>
                    </div>
                    <div className={s.buttons}>
                        <Button><span>Смотреть трейлер</span><FaCirclePlay/></Button>
                        <Button buttonType="inverted">Детали</Button>
                    </div>
                </div>
                <div className={s.list__indicator}>
                    {entitiesTop10.docs.map((_, i) => i == current ?
                        <div key={i} className={`${s.indicator} ${s.active}`}></div> :
                        <div
                            key={i}
                            className={s.indicator}
                            onClick={() => {
                                selectElement(i)
                            }}
                        ></div>
                    )}
                </div>
                <div className={s.container__image}>
                    {images.length && <img className={s.image} src={images[current].src} />}
                    <div className={s.shadow}></div>
                    <div className={s.shadow__border}></div>
                </div>
            </>}
        </Container>
    )
})

export default HeroSection