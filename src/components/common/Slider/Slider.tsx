import React, { FC } from "react";
import { useSlider } from "../../../hooks/useSlider";
import s from "./Slider.module.scss"
import { KinoWithPreloadType } from "../../../types/KinoWithPreloadType";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import SliderCard from "../../ui/cards/SliderCard/SliderCard";

interface SliderProps{
    entities: KinoWithPreloadType
    HomePageSlider?: boolean
} 

const Slider: FC<SliderProps> = ({entities, HomePageSlider}) => {

    const limit = entities.docs ? entities.docs.length : 0
    const {currentSlide, selectElement} = useSlider(limit)

    return(
        <>
            <div className={HomePageSlider ? s.slider_container : ""}>
                {HomePageSlider && <AiFillCaretLeft className={`${s.arrow} ${s.left}`} onClick={() => selectElement(currentSlide - 1)}/>}
                {entities.docs && entities.preloadedImages && 
                    <SliderCard
                        id={entities.docs[currentSlide].id}
                        name={entities.docs[currentSlide].name}
                        description={entities.docs[currentSlide].description}
                        type={entities.docs[currentSlide].type}
                        image={entities.preloadedImages[currentSlide].src}
                        HomePageSlider={HomePageSlider}
                    />
                }
                {HomePageSlider && <AiFillCaretRight className={`${s.arrow} ${s.right}`} onClick={() => selectElement(currentSlide + 1)} />}
            </div>
            <div className={HomePageSlider ? s.indicator_container : s.image_container}>
                {entities.preloadedImages && entities.preloadedImages.map((e, i) => 
                    i == currentSlide 
                    ?
                    HomePageSlider ?
                    <div className={`${s.indicator} ${s.active}`} key={i}></div> : 
                    <img className={`${s.image} ${s.active}`} src={e.src} key={i}/>
                    :
                    HomePageSlider ? 
                    <div className={s.indicator} onClick={() => selectElement(i)} key={i}></div> :
                    <img className={s.image} src={e.src} onClick={() => selectElement(i)} key={i}/>
                )}
            </div>
        </>
    )
}

export default React.memo(Slider)