import { useEffect, type FC, type ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchKinoTop10 } from "../../store/reducers/KinoSlice";
import Loader from "../common/Loader/Loader";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

interface AppLoaderProps{
    children: ReactNode
}

const AppLoader: FC<AppLoaderProps> = ({children}) => {

    const dispatch = useAppDispatch()
    const {isLoading, error} = useAppSelector(state => state.KinoReducer)

    useEffect(() => {
        dispatch(fetchKinoTop10())
    }, [])

    if(isLoading){
        return <Loader/>
    } else if(error){
        return <ErrorPage message={error}/>
    } else {
        return children
    }
}

export default AppLoader