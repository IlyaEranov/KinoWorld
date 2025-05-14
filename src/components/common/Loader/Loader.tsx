import s from "./Loader.module.scss"

function Loader(){
    return(
        <div className={s.loader}>
            {[...Array(3)].map((_, i) => 
                <div key={`loader__item_${i}`} className={`${s.loader__item} ${s[`_${i + 1}`]}`}></div>
            )}
        </div>
    )
}

export default Loader