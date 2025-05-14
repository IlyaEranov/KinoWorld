import Skeleton from "../../../common/Skeleton/Skeleton"
import s from "./SearchCard.module.scss"

function SearchCardSkeleton() {
    return (
        <div className={s["search-card"]}>
            <div className={s["search-card__image"]}>
                <Skeleton/>
            </div>
            <div className={s["search__content"]}>
                <div className={s.head}>
                    <Skeleton/>
                </div>
                <div className={s.body}>
                    <Skeleton/>
                </div>
            </div>
        </div>
    )
}

export default SearchCardSkeleton