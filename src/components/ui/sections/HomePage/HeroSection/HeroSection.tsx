import { useEffect } from "react"
import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import { useSlider } from "../../../../../hooks/useSlider"
import KinoSliderCard from "../../../cards/HomePage/KinoSliderCard/KinoSliderCard"
import s from "./HeroSection.module.scss"

function HeroSection() {

    const { top10Entities } = useAppSelector(state => state.KinoReducer)
    const limit = top10Entities ? top10Entities.docs.length : 0
    const { current, selectElement, images, selectImagesForPreload } = useSlider(limit)

    useEffect(() => {
        if(top10Entities){
            selectImagesForPreload(top10Entities.docs.map(e => e.backdrop.url))
        }
    }, [])

    return (
       <Container>
            {top10Entities && 
            <>
                {images.length != 0 &&
                <KinoSliderCard 
                    id={top10Entities.docs[current].id}
                    name={top10Entities.docs[current].name}
                    description={top10Entities.docs[current].description}
                    image={images[current].src}
                    type={top10Entities.docs[current].type}
                />}
                
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