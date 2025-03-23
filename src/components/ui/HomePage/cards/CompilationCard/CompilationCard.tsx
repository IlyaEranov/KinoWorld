import { FC } from "react";
import { KinoCardProps } from "../../../../../types/KinoCard";
import { Link } from "react-router-dom";
import { kinoUtil } from "../../../../../utils/kinoUtil";
import s from "./Compilation.module.scss"

const CompilationCard: FC<KinoCardProps> = ({id, name, image, description, type}) => {
    return (
        <Link to={`watch/${kinoUtil.linkType(type)}/${id}`} className={s.card}>
            <img className={s.image} src={image}/>
            <div className={s.description}>
                <h2 className={s.h2}>{name}</h2>
                <p className={s.p}>{description}</p>
            </div>
        </Link>
    )
}

export default CompilationCard