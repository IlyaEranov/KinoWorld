import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getKinoById } from "../../store/reducers/KinoSlice"
import Layout from "../common/Layout/Layout"

interface KinoByIdPageProps{
    id: string
}

const KinoByIdPage: FC<KinoByIdPageProps> = ({id}) => {

    const dispatch = useAppDispatch()
    const {kinoByIdEntitie} = useAppSelector(state => state.KinoReducer)

    useEffect(() => {
        if(kinoByIdEntitie == null || kinoByIdEntitie.id != id){
            dispatch(getKinoById(id))  
        }
    }, [kinoByIdEntitie])

    return (
        <Layout>
            {kinoByIdEntitie && kinoByIdEntitie.name}
        </Layout>
    )
}

export default KinoByIdPage