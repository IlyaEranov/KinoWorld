import { useRef, useState } from "react";
import { preloadImage } from "../utils/preloadImages";

export function useSlider(limit: number = 0, time: number = 10000){

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
        clearTimeout(timeout.current)
        if(i > limit - 1){
            setCurrent(0)
        } else if(i < 0) {
            setCurrent(limit - 1)
        } else {
            setCurrent(i)
        }
    }

    const selectImagesForPreload = (data: string[]) => {
        setImages(data.map(e => preloadImage(e)))
    }

    return {
        current,
        selectElement,
        images,
        selectImagesForPreload
    }
}