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
        setCurrent(i)
        clearTimeout(timeout.current)
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