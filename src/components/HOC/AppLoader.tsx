import { FC, ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getKinoTop10, searchKino } from "../../store/reducers/KinoSlice";
import Loader from "../common/Loader/Loader";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

interface AppLoaderProps{
    children: ReactNode
}

const AppLoader: FC<AppLoaderProps> = ({children}) => {
    
    const dispatch = useAppDispatch()
    const {isLoading, error} = useAppSelector(state => state.KinoReducer)

    useEffect(() => {
        dispatch(searchKino(""))
        dispatch(getKinoTop10(""))
    }, [])

    if(isLoading){
        return <Loader/>    
    } else if(error) {
        return <ErrorPage message={error}/>
    } else {
        return children
    }
}

export default AppLoader