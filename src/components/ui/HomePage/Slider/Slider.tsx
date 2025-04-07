import React, { FC } from "react";
import s from "./Slider.module.scss"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import SliderCard from "../cards/SliderCard/SliderCard";
import { useSlider } from "../../../../hooks/useSlider";
import { SliderProps } from "../../../../types/Slider";

const Slider: FC<SliderProps> = ({limit, entities}) => {

    const {currentSlide, selectElement} = useSlider(limit)

    return (
        <>
            <div className={s.slider_container}>
                <AiFillCaretLeft className={`${s.arrow} ${s.left}`} onClick={() => selectElement(currentSlide - 1)} />
                {entities.docs && entities.preloadedImages && 
                    <SliderCard
                        id={entities.docs[currentSlide].id}
                        name={entities.docs[currentSlide].name}
                        description={entities.docs[currentSlide].description}
                        type={entities.docs[currentSlide].type}
                        image={entities.preloadedImages[currentSlide].src}
                    />
                }
                <AiFillCaretRight className={`${s.arrow} ${s.right}`} onClick={() => selectElement(currentSlide + 1)} />
            </div>
            <div className={s.indicator_container}>
                {limit && [...Array(limit)].map((_, i) =>
                    i == currentSlide 
                    ?
                    <div key={i} className={`${s.indicator} ${s.active}`}></div>
                    :
                    <div key={i} className={s.indicator} onClick={() => selectElement(i)}></div>
                )}
            </div>
        </>
    )
}

export default React.memo(Slider)