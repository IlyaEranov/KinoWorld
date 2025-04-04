import { Link } from "react-router-dom"
import Container from "../../../../common/Container/Container"
import s from "./CompilationSection.module.scss"
import { AiFillCaretRight } from "react-icons/ai"
import { useAppSelector } from "../../../../../hooks/redux"
import React from "react"
import KinoCard from "../../cards/KinoCard/KinoCard"

function CompilationSection() {

    const { moviesTop10 } = useAppSelector(state => state.MoviesReducer)

    return (
        <Container offset={1200}>
            <div className={s.content}>
                <Link to={"/watch/movies"} className={s.more}>
                    <h1>Подборка популярных фильмов</h1>
                    <AiFillCaretRight className={s.arrow} />
                </Link>
                <div className={s.list}>
                    {moviesTop10?.docs.map((e, i) =>
                        <KinoCard
                            key={i}
                            id={e.id}
                            name={e.name}
                            description={e.description}
                            image={e.poster.url}
                            type={e.type}
                        />
                    )}
                </div>
            </div>
        </Container>
    )
}

export default React.memo(CompilationSection)