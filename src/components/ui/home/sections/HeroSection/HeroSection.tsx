import React from "react"
import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"

function HeroSection(){

    const kino = useAppSelector(state => state.KinoReducer.kinoTop10)

    console.log(kino)

    return(
        <Container>
            <></>
        </Container>
    )
}

export default React.memo(HeroSection)