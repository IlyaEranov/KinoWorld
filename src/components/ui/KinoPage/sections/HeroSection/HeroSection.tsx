import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import { getKinoByTypeTop10 } from "../../../../../store/reducers/KinoByTypeSlice"
import { KinoType } from "../../../../../types/KinoType"

interface HeroSectionProps{
    type: KinoType
}

const HeroSection: FC<HeroSectionProps> = ({type}) => {

    const dispatch = useAppDispatch()
    const {kinoByTypeTop10} = useAppSelector(state => state.KinoByTypeReducer)

    useEffect(() => {
        if(kinoByTypeTop10 == null || kinoByTypeTop10.docs[0].type != type){
            dispatch(getKinoByTypeTop10(type))
        }    
    }, [])

    const limit = kinoByTypeTop10 ? 

    return(
        <Container>
            <Slider limit/>
        </Container>
    )
}

export default HeroSection