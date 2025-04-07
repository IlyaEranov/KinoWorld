import { FC } from "react";
import { SliderProps } from "../../../../types/Slider";
import { useSlider } from "../../../../hooks/useSlider";
import s from "./Slider.module.scss"

const Slider: FC<SliderProps> = ({limit, entities}) => {

    const {currentSlide, selectElement} = useSlider(limit)

    return(
        <>
            <div className={s.slider_container}>

            </div>
            <div className={s.list_indicators}></div>
        </>
    )
}

export default Slider