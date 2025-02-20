import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getKinoById } from "../../store/reducers/KinoSlice"

interface KinoPageProps{
    id: string
}

const KinoPage: FC<KinoPageProps> = ({id}) => {

    const dispatch = useAppDispatch()
    const {kinoByIdEntitie} = useAppSelector(state => state.KinoReducer)

    useEffect(() => {
        if(kinoByIdEntitie == null || kinoByIdEntitie.id != id){
            dispatch(getKinoById(id))  
        }
    }, [kinoByIdEntitie])

    return (
        <>
            {kinoByIdEntitie && kinoByIdEntitie.name}
        </>
    )
}

export default KinoPage