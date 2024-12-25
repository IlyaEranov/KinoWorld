import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToUp = () => {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
    useEffect(() => {
        onTop()
    }, [routePath]);
 
    return null;
}

export default ScrollToUp