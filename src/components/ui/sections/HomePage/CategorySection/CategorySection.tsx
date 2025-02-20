import { Link } from "react-router-dom"
import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import GenresCard from "../../../cards/HomePage/GenresCard/GenresCard"
import KinoCard from "../../../cards/HomePage/KinoCard/KinoCard"
import s from "./CategorySection.module.scss"
import { AiFillCaretDown } from "react-icons/ai"

function CategorySection(){

    const {kinoEntities} = useAppSelector(state => state.KinoReducer)

    return(
        <Container>
            <div className={s.content}>
                <h1 className={s.h1}>Ознакомьтесь с нашим широким выбором категорий и жанров кино</h1>
                <GenresCard/>
                <div className={s.list}>
                    {kinoEntities && kinoEntities.map((e, i) => 
                        <KinoCard
                            key={i}
                            image={e.poster.previewUrl}
                            name={e.name}
                            description={e.description}
                        />
                    )}
                </div>
                <Link className={s.more} to={"/watch/movies"}>
                    <span>Показать все</span>
                    <AiFillCaretDown className={s.arrow}/>
                </Link>
            </div>
        </Container>
    )
}

export default CategorySection