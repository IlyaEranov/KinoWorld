import SkeletonTemplate from "../../../common/SkeletonTemplate/SkeletonTemplate"
import s from "./SearchSuggestion.module.scss"

function SearchSuggestionSkeleton(){
    return(
        <div className={s.card}>
            <div className={s.image}>
                <SkeletonTemplate/>
            </div>
            <div className={s.description}>
                <div className={s.head}>
                    <SkeletonTemplate/>
                </div>
                <div className={s.body}>
                    <SkeletonTemplate/>
                </div>
            </div>
        </div>
    )
}

export default SearchSuggestionSkeleton
