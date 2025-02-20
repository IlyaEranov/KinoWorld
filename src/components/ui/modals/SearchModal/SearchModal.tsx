import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { searchKino } from "../../../../store/reducers/KinoSlice"
import SearchField from "../../../common/Fields/SearchField/SearchField"
import SearchSuggestionCard from "../../cards/SearchSuggestionCard/SearchSuggestionCard"
import s from "./SearchModal.module.scss"

function SearchModal(){

    const dispatch = useAppDispatch()
    const {searchEntities} = useAppSelector(state => state.KinoReducer)

    return(
        <>
            <SearchField
                placeholder="Поиск по фильмам, сериалам и мультфильмам"
                onChange={(e) => {
                    dispatch(searchKino(e.target.value))
                }}
            />
            <div className={s.content}>
                {searchEntities && searchEntities.docs.map((e, i) => 
                    (i < 7 && e.rating.kp != 0) &&
                    <SearchSuggestionCard
                        key={i}
                        image={e.poster.url || e.poster.previewUrl}
                        name={e.name}
                        rating={Math.round(e.rating.kp * 10) / 10}
                        type={e.type}
                        year={e.year}
                    />
                )}
            </div>
        </>
    )
}

export default SearchModal