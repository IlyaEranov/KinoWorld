import { useEffect, useState } from "react";

export function useModal(){
    const [isActive, setActive] = useState(false)

    const openModal = () => {
        setActive(true)
    }

    const closeModal = () => {
        setActive(false)
    }

    const closeWhenScrolling = useEffect(() => {
        isActive && addEventListener("scroll", closeModal)
        return () => removeEventListener("scroll", closeModal)
    }, [isActive])

    return {
        isActive,
        openModal,
        closeModal,
        closeWhenScrolling
    }
}