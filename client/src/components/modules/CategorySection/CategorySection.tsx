import React, { useMemo, useState } from "react"
import Container from "../../common/Container/Container"
import s from "./CategorySection.module.scss"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { AiFillCaretDown } from "react-icons/ai"
import { Link } from "react-router-dom"
import { getMovie, resetEntitiesMovie } from "../../../store/reducers/KinoSlice"
import Skeleton from "react-loading-skeleton"

const CategorySection = React.memo(() => {

    const [current, setCurrent] = useState("все")

    const genresList = useMemo(() => [
        "все",
        "комедия",
        "боевик",
        "драма",
        "ужасы",
        "триллер",
        "детектив",
        "криминал"
    ], [])

    const {entitiesMovie} = useAppSelector(state => state.KinoReducer)
    const dispatch = useAppDispatch()

    return (
        <Container>
            <div className={s.content}>
                <h1 className={s.h1}>Ознакомьтесь с нашим широким выбором категорий и жанров фильмов</h1>
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
                                onClick={() => {
                                    setCurrent(genresList[i])
                                    dispatch(resetEntitiesMovie())
                                    dispatch(getMovie({
                                        limit: 6,
                                        notNullFields: ["poster.url", "description", "top250"],
                                        genres: genresList[i] == "все" ? undefined : genresList[i],
                                    }))
                                }}
                            >{e[0].toUpperCase() + e.slice(1)}</div>
                    )}
                </div>
                <div className={s.list}>
                    {entitiesMovie.map((e, i) =>
                        <div key={i} className={s.entitie}>
                            <img className={s.image} src={e.poster.previewUrl}/>
                            <div className={s.description}>
                                <h2 className={s.h2}>{e.name}</h2>
                                <p className={s.p}>{e.description}</p>
                            </div>
                        </div>
                    )}        
                </div>
                <Link className={s.more} to={"/films"}><span>Показать все</span><AiFillCaretDown className={s.arrow}/></Link>
            </div>
        </Container>
    )
})

export default CategorySection