import React, { useState } from "react"
import Container from "../../common/Container/Container"
import { useAppSelector } from "../../../hooks/redux"

import s from "./TopSeriesSection.module.scss"

const TopSeriesSection = React.memo(() => {

    const { entitiesSeries } = useAppSelector(state => state.KinoReducer)
    const [current, setCurrent] = useState(0)

    return (
        <Container>
            <div className={s.content}>
                <h1 className={s.h1}>Подборка популярных сериалов</h1>
                <div className={s.slider}>
                    {entitiesSeries && entitiesSeries.map((e, i) =>
                        <div key={i} className={current == i ? `${s.container__image} ${s.active}` : s.container__image}>
                            <img className={s.image} src={e.poster.url} onMouseOver={() => setCurrent(i)}/>
                            <div className={s.description}>
                                <h2 className={s.h2}>{e.name}</h2>
                                <p className={s.p}>{e.description}</p>
                            </div>
                        </div> 
                    )}
                </div>
            </div>
        </Container>
    )
})

export default TopSeriesSection