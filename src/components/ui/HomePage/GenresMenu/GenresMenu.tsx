import { useState } from "react"
import s from "./GenresMenu.module.scss"
import { useAppDispatch } from "../../../../hooks/redux"
import { getKinoByGenres, resetKinoByGenres } from "../../../../store/reducers/KinoSlice"

const genresList = [
    "все",
    "комедия",
    "боевик",
    "драма",
    "ужасы",
    "триллер",
    "детектив",
    "криминал"
]

function GenresMenu() {

    const [current, setCurrent] = useState<string>(genresList[0])
    const dispatch = useAppDispatch()

    const handlerClick = (i: number) => {
        setCurrent(genresList[i])
        dispatch(resetKinoByGenres())
        dispatch(getKinoByGenres({type: "movie", genres: genresList[i] == "все" ? [] : [genresList[i]]}))
    }

    return (
        <div className={s.menu}>
            {genresList.map((e, i) => 
                e == current 
                ?
                <div
                    key={i}
                    className={`${s.genres} ${s.active}`}
                >{e[0].toUpperCase() + e.slice(1)}</div>
                :
                <div
                    key={i}
                    className={s.genres}
                    onClick={() => handlerClick(i)}
                >{e[0].toUpperCase() + e.slice(1)}</div>
            )}
        </div>
    )
}

export default GenresMenu