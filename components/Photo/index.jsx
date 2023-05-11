import styles from './style.module.css'
import Image from 'next/image'
import Modal from '../Modal'
import { useState } from 'react'

const Photo = ({photoThumb, photoImage, photoAlt}) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Image className={styles.photo} src={photoThumb} photoimage={photoImage} alt={photoAlt} width={200} height={200} onClick={() => setOpen(!open)}/>
            <Modal modalImage={photoImage} isOpen={open} setOpen={setOpen}/>
        </>
    )
}

export default Photo