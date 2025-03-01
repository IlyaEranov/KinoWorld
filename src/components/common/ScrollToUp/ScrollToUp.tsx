import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToUp(){

    const routePath = useLocation()
    
    useEffect(() => {
        const onTop = () => {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"})
        }
        onTop()
    }, [routePath])

    return null
}

export default ScrollToUp