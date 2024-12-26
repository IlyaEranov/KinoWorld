import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"
import { Link } from "react-router-dom"
import Button from "../../ui/Button/Button"
import { FiSearch } from "react-icons/fi"
import { useModal } from "../../../hooks/useModal"
import Modal from "../Modal/Modal"
import SearchField from "../../ui/Fields/SearchField/SearchField"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { searchKino } from "../../../store/reducers/KinoSlice"
import React, { useEffect } from "react"
import { kinoSearchUtil } from "../../../utils/kinoSearchUtil"

const Header = React.memo(() => {

    const { active, showModal, closeModal } = useModal()
    const dispatch = useAppDispatch()
    const {isUpdating, entitiesSearch, updatingError} = useAppSelector(state => state.KinoReducer)
    
    useEffect(() => {
        if(active){
            window.addEventListener("scroll", closeModal)
        }
        return () => window.removeEventListener("scroll", closeModal)
    }, [active])

    return (
        <header>
            <div className={s.logo}>
                <Link to={"/"}>КИНОМИР</Link>
            </div>
            <nav>
                <NavLink
                    to={"/"}
                    className={({ isActive }) => [
                        isActive ? s.active : "",
                    ].join(" ")}
                >
                    Главная
                </NavLink>
                <NavLink
                    to={"/films"}
                    className={({ isActive }) => [
                        isActive ? s.active : "",
                    ].join(" ")}
                >
                    Фильмы
                </NavLink>
                <NavLink
                    to={"/series"}
                    className={({ isActive }) => [
                        isActive ? s.active : "",
                    ].join(" ")}
                >
                    Сериалы
                </NavLink>
                <NavLink
                    to={"/about"}
                    className={({ isActive }) => [
                        isActive ? s.active : "",
                    ].join(" ")}
                >
                    О нас
                </NavLink>
            </nav>
            <div className={s.buttons}>
                <div className={s.search__icon} onClick={showModal}>
                    <FiSearch className={s.icon} />
                </div>
                <Link to={"/register"}>
                    <Button>Регистрация</Button>
                </Link>
                <Link to={"/login"}>
                    <Button buttonType="inverted">Вход</Button>
                </Link>

            </div>
            {active &&
                <Modal onClick={closeModal}>
                    <SearchField
                        placeholder="Поиск по фильмам и сериалам"
                        onChange={(e) => {
                            dispatch(searchKino(e.target.value))
                        }}
                    />
                    <div className={s.content}>
                    {
                        entitiesSearch && entitiesSearch.docs.map((e, i) => 
                            (i < 7 && e.rating.kp != 0) &&
                            <div key={i} className={s.element}>
                                <img className={s.image} src={e.poster.previewUrl || e.poster.url}/>
                                <div className={s.description}>
                                    <h4 className={s.h4}>{e.name}</h4>
                                    <div className={s.row}>
                                        <span className={s.rating}
                                            style={{
                                                color: kinoSearchUtil.ratingColor(Math.round(e.rating.kp * 10) / 10)
                                            }}
                                        >{e.rating.kp.toFixed(1)}</span>
                                        <p className={s.p}>{kinoSearchUtil.typeKino(e.type)},</p>
                                        <p className={s.p}>{e.year}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    </div>
                </Modal>
            }
        </header>
    )
})

export default Header