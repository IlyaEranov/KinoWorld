import { useEffect } from "react"
import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import { useSlider } from "../../../../../hooks/useSlider"
import KinoSliderCard from "../../../cards/HomePage/KinoSliderCard/KinoSliderCard"
import s from "./HeroSection.module.scss"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"

function HeroSection() {

    const { top10Entitie } = useAppSelector(state => state.KinoReducer)
    const limit = top10Entitie ? top10Entitie.docs.length : 0
    const { current, selectElement, images, selectImagesForPreload } = useSlider(limit)

    useEffect(() => {
        if(top10Entitie){
            selectImagesForPreload(top10Entitie.docs.map(e => e.backdrop.url))
        }
    }, [])

    return (
       <Container>
            {top10Entitie && 
            <>
                {images.length != 0 && 
                <div className={s.slider_container}>
                    <AiFillCaretLeft className={`${s.arrow} ${s.left}`} onClick={() => selectElement(current - 1)}/>
                    <KinoSliderCard 
                        id={top10Entitie.docs[current].id}
                        name={top10Entitie.docs[current].name}
                        description={top10Entitie.docs[current].description}
                        image={images[current].src}
                        type={top10Entitie.docs[current].type}
                    />
                    <AiFillCaretRight className={`${s.arrow} ${s.right}`} onClick={() => selectElement(current + 1)}/>
                </div>}
                
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