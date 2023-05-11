import styles from './style.module.css'
import Image from 'next/image'
import {AiFillCloseCircle} from 'react-icons/ai'

const Modal = ({modalImage, isOpen, setOpen}) => {
    if(isOpen){
        return (
            <div className={styles.bg}>
                <div className={styles.close}>
                    <AiFillCloseCircle size={40} color='#FFF' onClick={() => setOpen(!isOpen)}/>
                </div>
                <div className={styles.content}>
                    <Image src={modalImage} className={styles.img} alt="Fórum Ambiental" width={800} height={534} />
                </div>
            </div>
        )
    }
}

export default Modal