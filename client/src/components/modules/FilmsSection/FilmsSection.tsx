import { IoFilterOutline } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import Container from "../../common/Container/Container"
import s from "./FilmsSection.module.scss"
import { AiFillCaretDown, AiOutlineCaretDown } from "react-icons/ai"
import { FaFilter } from "react-icons/fa6"
import { getMovie } from "../../../store/reducers/KinoSlice"
import { useState } from "react"
import SearchField from "../../ui/Fields/SearchField/SearchField"

function FilmsSection(){

    const {isUpdating, entitiesMovie, updatingError} = useAppSelector(state => state.KinoReducer)
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState(2)
    const isTrue = true

    return(
        <>
        <section className={s.search}>
            <SearchField
                placeholder="Поиск по фильмам"
                onChange={() => {

                }}
            />
            <div className={s.rec}>
                {isTrue && 
                    <>
                        <p className={s.p}>Недавние запросы:</p>
                        <div className={s.element}>Человек Паук</div>
                    </>
                }
            </div>
        </section>
        <Container>
            <div className={s.filter}>
                <div className={s.sort__button}>
                    <IoFilterOutline className={s.icon}/>
                    <span>Сортировать по:</span>
                    <div>Популярности</div>
                    <AiOutlineCaretDown className={s.icon}/>
                </div>
                <div className={s.sort__button}>
                    <FaFilter className={s.icon}/>
                    <span>Фильтр</span>
                </div>
            </div>
            <div className={s.list}>
                {entitiesMovie && entitiesMovie.map(e => 
                    <div className={s.entitie}>
                        <img className={s.image} src={e.poster.url}/>
                        <div className={s.description}>
                            <h2 className={s.h2}>{e.name}</h2>
                            <p className={s.p}>{e.shortDescription}</p>
                        </div>
                    </div>   
                )}
                {isUpdating && <div>Loading...</div>}
            </div>
            <div className={s.more} onClick={() => {
                setCurrentPage(currentPage + 1)
                dispatch(getMovie({limit: 6, page: currentPage, notNullFields: ["poster.url", "description", "top250"]}))
            }}>
                <span>Показать еще</span>
                <AiFillCaretDown className={s.arrow}/>
            </div>
        </Container>
        </>
    )
}

export default FilmsSection