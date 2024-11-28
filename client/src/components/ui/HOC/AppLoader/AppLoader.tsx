import { FC, ReactNode, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { getKino } from "../../../../store/reducers/KinoSlice"
import Spinner from "../Spinner/Spinner"

interface AppLoaderProps{
    children: ReactNode
}

const AppLoader: FC<AppLoaderProps> = ({children}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getKino({limit: 5, value: "top10"}))
    }, [])
    const {isLoading} = useAppSelector(state => state.KinoReducer)
    if(isLoading){
        return <Spinner/>
    } else {
        return children
    }
}

export default AppLoader