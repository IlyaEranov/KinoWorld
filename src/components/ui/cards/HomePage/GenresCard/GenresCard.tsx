import { useState } from "react"
import s from "./GenresCard.module.scss"
import { useAppDispatch } from "../../../../../hooks/redux"
import { getKino, resetKinoEntities } from "../../../../../store/reducers/KinoSlice"

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

function GenresCard() {

    const [current, setCurrent] = useState<string>(genresList[0])
    const dispatch = useAppDispatch()

    const handlerClick = (i: number) => {
        setCurrent(genresList[i])
        dispatch(resetKinoEntities())
        dispatch(getKino({
            genres: genresList[i] == "все" ? undefined : genresList[i],
            notNullFields: ["poster.url", "description", "top250"],
        }))
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

export default GenresCard