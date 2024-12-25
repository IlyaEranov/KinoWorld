import { useRef, useState } from "react"

interface SliderProps{
    limit: number
    time: number
}

export function useSlider({limit, time}: SliderProps){

    const timeout = useRef<number>()
    const [current, setCurrent] = useState(0)
    const [images, setImages] = useState<HTMLImageElement[]>([])

    timeout.current = setTimeout(() => {
        if(current == limit - 1){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }, time)

    const selectElement = (i: number) => {
        setCurrent(i)
        clearTimeout(timeout.current)
    }
    
    return {
        current,
        selectElement,
        images,
        setImages
    }
}