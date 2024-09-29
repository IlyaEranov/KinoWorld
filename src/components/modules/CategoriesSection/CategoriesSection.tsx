import React, { memo, useEffect, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import s from "./CategoriesSection.module.scss"
import { getKino } from "../../../store/reducers/KinoSlice"
import Button from "../../ui/Buttons/Button/Button"
import play from "../../../assets/icons/play-circle.svg"
import AppLoader from "../../ui/HOC/AppLoader/AppLoader"
import arrow from "../../../assets/icons/arrow-down.svg"
import { Link } from "react-router-dom"

const CategoriesSection = memo(() => {

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
    
    const [value, setValue] = useState("все")
    let limit = 5
    let notNullField = `genres.name=${value}`

    const { isLoading, entities, error } = useAppSelector(state => state.KinoReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getKino({ limit, notNullField }))
    }, [limit, notNullField])

    return (
        <div className={s.container}>
            {isLoading && <AppLoader />}
            {entities && <>
                <div className={s.content}>
                    <h1 className={s.h1}>Ознакомьтесь с нашим широким выбором категорий и жанров фильмов</h1>
                    <div className={s.categories}>
                        <div className={s.menu}>
                            {genresList.map((e, i) =>
                                e == value ?
                                    <div key={i} className={`${s.genres} ${s.active}`}>{e[0].toUpperCase() + e.slice(1)}</div> :
                                    <div
                                        key={i}
                                        className={s.genres}
                                        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                            event.preventDefault()
                                            setValue(genresList[i])
                                        }}
                                    >{e[0].toUpperCase() + e.slice(1)}</div>
                            )}
                            <Link to={"/films"} className={s.genres}>
                                <span>Еще</span><img src={arrow} className={s.arrow} />
                            </Link>
                        </div>
                        <div className={s.chunks}>
                            {entities.docs.map((e, i) => <div key={i} className={s.container__enttities}>
                                <img className={s.image} src={e.poster.previewUrl} />
                                <div className={s.description}>
                                    <h2 className={s.h2}>{e.name}</h2>
                                    <p className={s.p}>{e.shortDescription}</p>
                                </div>
                                <div className={s.buttons}>
                                    <Button><span>Смотреть трейлер</span><img className={s.play} src={play} /></Button>
                                    <Button inverted>Детали</Button>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </>}
            {error && <div className={s.error}>{error}</div>}
        </div>
    )
})

export default CategoriesSection