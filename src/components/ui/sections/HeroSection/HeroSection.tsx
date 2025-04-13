import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { getKinoTop10, selectKinoTop10WithPreload } from "../../../../store/reducers/KinoSlice"
import Container from "../../../common/Container/Container"
import Slider from "../../../common/Slider/Slider"
import { KinoType } from "../../../../types/KinoType"

interface HeroSectionProps{
    type?: KinoType
    HomePageSlider?: boolean
}

const HeroSection: FC<HeroSectionProps> = ({type, HomePageSlider}) => {
    
    const dispatch = useAppDispatch()
    const kinoTop10 = useAppSelector(selectKinoTop10WithPreload)

    useEffect(() => {
        type ? dispatch(getKinoTop10(type)) : dispatch(getKinoTop10(""))
    }, [type])

    return (
        <Container>
            <Slider entities={kinoTop10} HomePageSlider={HomePageSlider}/>
        </Container>
    )
}

export default HeroSection