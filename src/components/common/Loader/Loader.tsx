import s from "./Loader.module.scss"

function Loader(){
    return(
        <div className={s.container}>
            <div className={`${s.item} ${s._1}`}></div>
            <div className={`${s.item} ${s._2}`}></div>
            <div className={`${s.item} ${s._3}`}></div>
        </div>
    )
}

export default Loader