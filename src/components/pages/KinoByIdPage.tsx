import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getKinoById } from "../../store/reducers/KinoSlice"
import Layout from "../common/Layout/Layout"

interface KinoByIdPageProps{
    id: string
}

const KinoByIdPage: FC<KinoByIdPageProps> = ({id}) => {

    const dispatch = useAppDispatch()
    const {kinoById} = useAppSelector(state => state.KinoReducer)

    useEffect(() => {
        if(kinoById == null || kinoById.id != id){
            dispatch(getKinoById(id))  
        }
    }, [])

    return (
        <Layout>
            {kinoById && kinoById.name}
        </Layout>
    )
}

export default KinoByIdPage