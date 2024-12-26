import { useState } from "react"

export function useModal(){
    
    const [active, setActive] = useState(false)
    
    const showModal = () => {
        setActive(true)
    }

    const closeModal = () => {
        setActive(false)
    }

    return {
        active,
        showModal,
        closeModal
    }
}