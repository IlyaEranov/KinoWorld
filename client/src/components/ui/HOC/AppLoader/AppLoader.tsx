import { FC, ReactNode, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import {getMovie, getKinoTop10 } from "../../../../store/reducers/KinoSlice"
import Spinner from "../Spinner/Spinner"
import ErrorPage from "../ErrorPage/ErrorPage"

interface AppLoaderProps{
    children: ReactNode
}
 
const AppLoader: FC<AppLoaderProps> = ({children}) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getKinoTop10({limit: 5}))
        dispatch(getMovie({limit: 6, notNullFields: ["poster.url", "description"]}))
    }, [])

    const {isLoading, error} = useAppSelector(state => state.KinoReducer)

    if(isLoading){
        return <Spinner/>
    } else if(error) {
        return <ErrorPage message={error}/>
    } else {
        return children
    }
}

export default AppLoader