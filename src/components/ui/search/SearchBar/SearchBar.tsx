import { useModal } from "../../../../hooks/useModal";
import SearchButton from "../../../common/Buttons/SearchButton/SearchButton";
import SearchField from "../../../common/Fields/SearchField/SearchField";
import Modal from "../../../common/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import s from "./SearchBar.module.scss"
import { useDebounce } from "../../../../hooks/useDebounce";
import { searchKino } from "../../../../store/reducers/KinoSlice";
import SearchCard from "../SearchCard/SearchCard";
import SearchCardSkeleton from "../SearchCard/SearchCardSkeleton";
import React, { useEffect } from "react";
import CloseButton from "../../../common/Buttons/CloseButton/CloseButton";

function SearchBar() {

    const limit = 7
    const { isSkeletonLoading, kinoSearch } = useAppSelector(state => state.KinoReducer)
    const dispatch = useAppDispatch()

    const { isActive, openModal, closeModal } = useModal()

    const [debouncedSearchTerm, setSearchTerm] = useDebounce("", 500)

    const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const t = setTimeout(() => {
            dispatch(searchKino(debouncedSearchTerm))
        }, 0)
        return () => clearTimeout(t)
    }, [debouncedSearchTerm])

    return (
        <>
            <SearchButton onOpen={openModal} />
            <Modal active={isActive} onClose={closeModal}>
                <div className={s.search__wrapper}>
                    <SearchField
                        placeholder="Поиск кино"
                        onChange={handlerSearch}
                    />
                    <CloseButton onClose={closeModal}/>
                </div>
                <div className={s.search__suggestion}>
                    {isSkeletonLoading ?
                        [...Array(limit)].map((_, i) =>
                            <SearchCardSkeleton key={`sekeleton_${i}`} />)
                        :
                        kinoSearch && kinoSearch.docs.map((e, i) =>
                            (i < limit
                                && e.rating.kp != 0
                                && e.type != "anime"
                                && e.type != "anime-series"
                            )
                            &&
                            <SearchCard
                                key={`${e.name}_${e.id}`}
                                id={e.id}
                                type={e.type}
                                name={e.name}
                                image={e.poster.previewUrl || ""}
                                rating={Math.round(e.rating.kp * 10) / 10}
                                year={e.year}
                            />
                        )
                    }
                </div>
            </Modal>
        </>
    )
}

export default React.memo(SearchBar)