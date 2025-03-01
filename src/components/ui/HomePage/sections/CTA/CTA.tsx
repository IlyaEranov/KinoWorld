import Button from "../../../../common/Buttons/Button/Button"
import s from "./CTA.module.scss"
import ctaImage from "../../../../../assets/images/ff0d0aaa3c99bebaf1def49db0cb822c.jpg"

function CTA(){
    return(
        <section className={s.cta}>
            <div className={s.content}>
                <h1 className={s.h1}>Связаться с нами</h1>
                <h2 className={s.h2}>У вас есть вопрос? Мы с удовольствием ответим на него. Отправьте сообщение и мы ответим на него как можно скорее</h2>
            </div>
            <div className={s.button_container}>
                <Button>Отправить сообщение</Button>
            </div>
            <img className={s.image} src={ctaImage}/>
        </section>
    )
}

export default CTA