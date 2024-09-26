import { useState } from "react"

export const usePagiantion = () => {
    
    const [current, setCurrent] = useState(0)

    const dynamicPagination = (limit: number) => {
        setTimeout(() => {
            current == limit - 1 ? setCurrent(0) : setCurrent(current + 1)
        }, 10000)
    }

    return {
        current,
        setCurrent,
        dynamicPagination
    }
}