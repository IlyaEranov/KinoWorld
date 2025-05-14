import { useEffect, useState } from "react";

export function useDebounce<T>(initialValue: T, delay: number): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState(initialValue)
    const [debouncedValue, setDebouncedValue] = useState(initialValue)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => clearTimeout(timer)
    }, [value, delay])

    return [debouncedValue, setValue]
}