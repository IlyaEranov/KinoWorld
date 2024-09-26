import React from "react"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import s from "./HomePreview.module.scss"
import { getKino } from "../../../store/reducers/KinoSlice"
import { usePagiantion } from "../../../hooks/usePagination"
import Button from "../../ui/Buttons/Button/Button"
import play from "../../../assets/icons/play-circle.svg"

const HomePreview = () => {

    const limit = 5
    const notNullField = "top10"

    const { isLoading, entities, error } = useAppSelector(state => state.KinoReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getKino({ limit, notNullField }))
    }, [])

    const { current, setCurrent, dynamicPagination } = usePagiantion()

    dynamicPagination(limit)

    return (
        <div className={s.container}>
            {!isLoading &&
                !error
                ?
                <>
                    <div className={s.content}>
                        <div className={s.description}>
                            <h1 className={s.h1}>{entities?.docs[current].name}</h1>
                            <p className={s.p}>{entities?.docs[current].description}</p>
                        </div>
                        <div className={s.buttons}>
                            <Button><span>Смотреть трейлер</span><img className={s.play} src={play} /></Button>
                            <Button inverted>Детали</Button>
                        </div>
                    </div>
                    <div className={s.list__indicator}>
                        {entities?.docs.map((_, i) => i == current 
                            ?
                            <div className={`${s.indicator} ${s.active}`}></div>
                            :
                            <div
                                className={s.indicator}
                                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                    e.preventDefault()
                                    setCurrent(i)
                                }}
                            ></div>
                        )}
                    </div>
                    <div className={s.container__image}>
                        <img className={s.image} src={entities?.docs[current].backdrop.url} />
                        <div className={s.shadow}></div>
                        <div className={s.shadow__border}></div>
                    </div> 
                </>
                :
                <div className={s.error}>{error}</div>
            }
        </div>
    )
}

export default HomePreview