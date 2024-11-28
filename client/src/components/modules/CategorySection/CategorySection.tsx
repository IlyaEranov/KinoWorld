import { useAppSelector } from "../../../hooks/redux"
import s from "./CategorySection.module.scss"

function CategorySection(){

    const {entities} = useAppSelector(state => state.KinoReducer)

    return(
        <div className={s.container}>
            
        </div>
    )
}

export default CategorySection