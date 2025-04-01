import { useRef, useState } from "react";

export function useSlider(limit: number = 0, time: number = 10000){

    const timeout = useRef<number>()
    const [currentSlide, setCurrentSlide] = useState(0)

    timeout.current = setTimeout(() => {
        if(currentSlide == limit - 1){
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }, time)

    const selectElement = (i: number) => {
        clearTimeout(timeout.current)
        if(i > limit - 1){
            setCurrentSlide(0)
        } else if(i < 0) {
            setCurrentSlide(limit - 1)
        } else {
            setCurrentSlide(i)
        }
    }

    return {
        currentSlide,
        selectElement
    }
}