import { useRef, useState } from "react";

export function useSlider(limit: number = 0, time: number = 10000){

    const timeout = useRef<number>()
    const [current, setCurrent] = useState(0)

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

    return {
        current,
        selectElement
    }
}