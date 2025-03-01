import { FiSearch } from "react-icons/fi"
import { useModal } from "../../../../hooks/useModal"
import s from "./SearchButton.module.scss"
import Modal from "../../Modal/Modal"
import SearchModal from "../../../ui/Header/modals/SearchModal/SearchModal"

function SearchButton(){
    
    const {active, showModal, closeModal, closeWhenScroll} = useModal()

    closeWhenScroll()

    return(
        <>
            <button className={s.button} onClick={showModal}>
                <FiSearch className={s.icon}/>
            </button>
            {active && 
                <Modal onClose={closeModal}>
                    <SearchModal/>
                </Modal>
            }
        </>
    )
}

export default SearchButton