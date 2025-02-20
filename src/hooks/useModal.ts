import { useEffect, useState } from "react"

export function useModal(){
    
    const [active, setActive] = useState(false)

    const showModal = () => {
        setActive(true)
    }

    const closeModal = () => {
        setActive(false)
    }
    
    const closeWhenScroll = () => useEffect(() => {
        active && window.addEventListener("scroll", closeModal)
        return () => window.removeEventListener("scroll", closeModal)
    }, [active])
        

    return {
        active,
        showModal,
        closeModal,
        closeWhenScroll
    }
}