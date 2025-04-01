import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import SliderCard from "../../cards/SliderCard/SliderCard"
import { getTop10WithPreload } from "../../../../../store/reducers/KinoSlice"
import React, { useCallback, useRef, useState } from "react"
import Slider from "../../Slider/Slider"

function HeroSection() {

    const kinoTop10 = useAppSelector(getTop10WithPreload)
    const limit = kinoTop10.docs ? kinoTop10.docs.length : 0

    const timeout = useRef<number>()
    const [currentSlide, setCurrentSlide] = useState(0)

    timeout.current = setTimeout(() => {
        if(currentSlide == limit - 1){
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }, 10000)

    const selectElement = useCallback((i: number) => {
        clearTimeout(timeout.current)
        if(i > limit - 1){
            setCurrentSlide(0)
        } else if(i < 0) {
            setCurrentSlide(limit - 1)
        } else {
            setCurrentSlide(i)
        }
    }, [])

    return (
       <Container>
            <Slider limit={limit} currentSlide={currentSlide} selectElement={selectElement}>
                {kinoTop10.docs && kinoTop10.preloadedImages && 
                    <SliderCard
                        id={kinoTop10.docs[currentSlide].id}
                        name={kinoTop10.docs[currentSlide].name}
                        description={kinoTop10.docs[currentSlide].description}
                        type={kinoTop10.docs[currentSlide].type}
                        image={kinoTop10.preloadedImages[currentSlide].src}
                    />
                }
            </Slider>
       </Container>
    )
}

export default React.memo(HeroSection)