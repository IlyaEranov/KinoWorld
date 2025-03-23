import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import { useSlider } from "../../../../../hooks/useSlider"
import KinoSliderCard from "../../cards/SliderCard/SliderCard"
import s from "./HeroSection.module.scss"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import { getPreloadedImages } from "../../../../../store/reducers/KinoSlice"

function HeroSection() {

    const images = useAppSelector(getPreloadedImages())
    const { kinoTop10 } = useAppSelector(state => state.KinoReducer)
    const limit = kinoTop10 ? kinoTop10.docs.length : 0
    const { current, selectElement} = useSlider(limit)

    return (
       <Container>
            {kinoTop10 && images && 
            <>
                <div className={s.slider_container}>
                    <AiFillCaretLeft className={`${s.arrow} ${s.left}`} onClick={() => selectElement(current - 1)}/>
                    <KinoSliderCard 
                        id={kinoTop10.docs[current].id}
                        name={kinoTop10.docs[current].name}
                        description={kinoTop10.docs[current].description}
                        image={images[current].src}
                        type={kinoTop10.docs[current].type}
                    />
                    <AiFillCaretRight className={`${s.arrow} ${s.right}`} onClick={() => selectElement(current + 1)}/>
                </div>                
                <div className={s.list}>
                    {limit && [...Array(limit)].map((_, i) =>
                        i == current ?
                        <div key={i} className={`${s.indicator} ${s.active}`}></div> :
                        <div 
                            key={i}
                            className={s.indicator}
                            onClick={() => selectElement(i)}
                        ></div>
                    )}
                </div>
            </>}
       </Container>
    )
}

export default HeroSection