import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { getParameterByName } from "../../../utils/getParameterByName"
import Container from "../../common/Container/Container"
import Layout from "../../common/Layout/Layout"
import { getKinoById } from "../../../store/reducers/KinoSlice"
import Spinner from "../../ui/HOC/Spinner/Spinner"
import ErrorPage from "../../ui/HOC/ErrorPage/ErrorPage"
import s from "./KinoPage.module.scss"
import Button from "../../ui/Button/Button"
import { kinoSearchUtil } from "../../../utils/kinoSearchUtil"
import { FaBookmark } from "react-icons/fa6"
import { AiOutlineEllipsis } from "react-icons/ai"

const KinoPage = () => {

    
    const dispatch = useAppDispatch()
    const {isLoading, entitieKino, error} = useAppSelector(state => state.KinoReducer)
    
    useEffect(() => {
        dispatch(getKinoById("6706155"))
    }, [])
    
    if(isLoading){
        return <Spinner/>
    } else if (error){
        return <ErrorPage message={error}/>
    } else {
        return (
            <Layout>
                <Container>
                    {entitieKino && entitieKino.map(e => 
                        <div className={s.content}>
                            <img className={s.image} src={e.poster.url}/>
                            <div className={s.description}>
                                <h1 className={s.h1}>{e.name}</h1>
                                <h4 className={s.h4}>Возрастное ограничение {e.ageRating}+</h4>
                                <h4 className={s.p}>{e.description}</h4>
                                <div className={s.buttons}>
                                    <Button>Смотреть {kinoSearchUtil.typeKino(e.type)}</Button>
                                    <FaBookmark className={s.favorites}/>
                                    <AiOutlineEllipsis className={s.more}/>
                                </div>
                                <h4 className={s.h4}>{
                                    (kinoSearchUtil.typeKino(e.type)[0] == "а" && kinoSearchUtil.typeKino(e.type).slice(-1) == "л") ?
                                   `Об ${kinoSearchUtil.typeKino(e.type)}е` : kinoSearchUtil.typeKino(e.type)[0] == "а" ? 
                                    `Об ${kinoSearchUtil.typeKino(e.type)}` : `О ${kinoSearchUtil.typeKino(e.type)}`
                                }</h4>
                                <p className={s.p}>
                                    <span>Год производства</span>
                                    <span>{e.year}</span>
                                </p>
                                <p className={s.p}>
                                    <span>Страна</span>
                                    <span>{e.countries.map(countrie => countrie.name).join(", ")}</span>
                                </p>
                                <p className={s.p}>
                                    <span>Жанры</span>
                                    <span>{e.genres.map(genre => genre.name).join(", ")}</span>
                                </p>
                                <p className={s.p}>
                                    <span>Режиссер</span>
                                    <span>{e.persons.filter(person => person.profession == "режиссеры").map(person => person.name).join(", ")}</span>
                                </p>
                                <p className={s.p}>
                                    <span>Сценарий</span>
                                    <span>{e.persons.filter(person => person.profession == "сценаристы").map(person => person.name).join(", ")}</span>
                                </p>
                                <p className={s.p}>
                                    <span>Продюсер</span>
                                    <span>{e.persons.filter(person => person.profession == "продюсеры").map(person => person.name).join(", ")}</span>
                                </p>
                                <p className={s.p}>
                                    <span>Продюсер</span>
                                    <span>{e.persons.filter(person => person.profession == "продюсеры").map(person => person.name).join(", ")}</span>
                                </p>
                                <p className={s.p}>
                                    <span>Актер</span>
                                    <span>{e.persons.filter(person => person.profession == "актеры").map(person => person.name).join(", ")}</span>
                                </p>
                            </div>
                            <div className={s.rating}>
                                <h4 className={s.h4}>
                                    <span>Рейтинг: </span>
                                    <span
                                        style={{
                                            color: kinoSearchUtil.ratingColor(Math.round(e.rating.kp * 10) / 10)
                                        }}
                                    >{e.rating.kp.toFixed(1)}</span>
                                </h4>
                            </div>
                        </div>    
                    )}
                </Container>
            </Layout>
        )
    }
}

export default KinoPage