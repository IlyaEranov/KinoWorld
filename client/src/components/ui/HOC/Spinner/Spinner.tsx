import s from "./Spiner.module.scss"

function Spinner(){
    return(
        <div className={s.container}>
            <div className={`${s.item} ${s._1}`}></div>
            <div className={`${s.item} ${s._2}`}></div>
            <div className={`${s.item} ${s._3}`}></div>
        </div>
    )
}

export default Spinner