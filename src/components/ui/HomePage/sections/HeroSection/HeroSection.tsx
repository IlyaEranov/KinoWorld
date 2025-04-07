import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import { selectTop10WithPreload } from "../../../../../store/reducers/KinoSlice"
import React from "react"
import Slider from "../../Slider/Slider"

function HeroSection() {

    const kinoTop10 = useAppSelector(selectTop10WithPreload)
    const limit = kinoTop10.docs ? kinoTop10.docs.length : 0

    return (
       <Container>
            <Slider limit={limit} entities={kinoTop10}/>
       </Container>
    )
}

export default React.memo(HeroSection)