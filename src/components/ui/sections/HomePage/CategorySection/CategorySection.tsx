import { Link } from "react-router-dom"
import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import GenresCard from "../../../cards/HomePage/GenresCard/GenresCard"
import KinoCard from "../../../cards/HomePage/KinoCard/KinoCard"
import s from "./CategorySection.module.scss"
import { AiFillCaretDown } from "react-icons/ai"
import SkeletonTemplate from "../../../../HOC/SkeletonTemplate/SkeletonTemplate"

function CategorySection(){

    const {isSkeletonLoading, kinoEntities} = useAppSelector(state => state.KinoReducer)

    return(
        <Container>
            <div className={s.content}>
                <h1 className={s.h1}>Ознакомьтесь с нашим широким выбором категорий и жанров кино</h1>
                <GenresCard/>
                <div className={s.list}>
                    {isSkeletonLoading ? [...Array(10)].map((_, i) => <div key={i} className={s.skeleton}><SkeletonTemplate/></div>) : 
                        kinoEntities.map((e, i) => 
                            <KinoCard
                                key={i}
                                id={e.id}
                                image={e.poster.previewUrl}
                                name={e.name}
                                description={e.shortDescription ? e.shortDescription : e.description}
                                type={e.type}
                            />
                        )
                    }
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