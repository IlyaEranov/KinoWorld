import Container from "../../../../common/Container/Container"
import s from "./CompilationSection.module.scss"

function CompilationSection(){
    return(
        <Container offset={1200}>
            <div className={s.content}>
                <h1 className={s.h1}>Под</h1>
            </div>
        </Container>
    )
}

export default CompilationSection