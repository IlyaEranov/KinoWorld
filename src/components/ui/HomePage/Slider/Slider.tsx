import React, { FC, ReactNode } from "react";
import s from "./Slider.module.scss"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface SliderProps {
    children: ReactNode
    limit: number
    currentSlide: number
    selectElement: (i: number) => void
}

const Slider: FC<SliderProps> = ({ children, limit, currentSlide, selectElement }) => {
    return (
        <>
            <div className={s.slider_container}>
                <AiFillCaretLeft className={`${s.arrow} ${s.left}`} onClick={() => selectElement(currentSlide - 1)} />
                {children}
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