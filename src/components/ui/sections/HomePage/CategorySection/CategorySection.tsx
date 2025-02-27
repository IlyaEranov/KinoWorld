import { Link } from "react-router-dom"
import { useAppSelector } from "../../../../../hooks/redux"
import Container from "../../../../common/Container/Container"
import GenresMenu from "../../../GenresMenu/GenresMenu"
import s from "./CategorySection.module.scss"
import { AiFillCaretDown } from "react-icons/ai"
import SkeletonTemplate from "../../../../common/SkeletonTemplate/SkeletonTemplate"
import CategoryCard from "../../../cards/HomePage/CategoryCard/CategoryCard"
import { useEffect, useState } from "react"

function CategorySection(){

    const {isSkeletonLoading, kinoByGenresEntitie} = useAppSelector(state => state.KinoReducer)

    const [isOffset, setIsOffset] = useState(false)

    useEffect(() => {
        const scrollOffset = () => {
            if(pageYOffset >= 200){
                setIsOffset(true)
            } else {
                setIsOffset(false)
            }
        }
        window.addEventListener("scroll", scrollOffset)
        return () => window.removeEventListener("scroll", scrollOffset)
    }, [])

    return(
        <Container>
            <div className={isOffset ? `${s.content} ${s.active}` : s.content}>
                <h1 className={s.h1}>Ознакомьтесь с нашим широким выбором категорий и жанров кино</h1>
                <GenresMenu/>
                <div className={s.list}>
                    {isSkeletonLoading ? [...Array(10)].map((_, i) => <div key={i} className={s.skeleton}><SkeletonTemplate/></div>) : 
                        kinoByGenresEntitie && kinoByGenresEntitie.docs.map((e, i) => 
                            <CategoryCard
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