import { FC, ReactNode, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
<<<<<<< HEAD
import {getMovie, getKinoTop10, getSeries, searchKino } from "../../../../store/reducers/KinoSlice"
=======
import {getMovie, getKinoTop10, getSeries } from "../../../../store/reducers/KinoSlice"
>>>>>>> 1b120a2f59e059d3e237821a852199ae103a5f53
import Spinner from "../Spinner/Spinner"
import ErrorPage from "../ErrorPage/ErrorPage"

interface AppLoaderProps{
    children: ReactNode
}
 
const AppLoader: FC<AppLoaderProps> = ({children}) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getKinoTop10({limit: 5}))
        dispatch(getMovie({limit: 6, notNullFields: ["poster.url", "description", "top250"]}))
        dispatch(getSeries({limit: 6, notNullFields: ["poster.url", "description", "top250"]}))
<<<<<<< HEAD
        dispatch(searchKino(""))
=======
>>>>>>> 1b120a2f59e059d3e237821a852199ae103a5f53
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