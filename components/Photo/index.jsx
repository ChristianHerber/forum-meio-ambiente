import styles from './style.module.css'
import Image from 'next/image'

const Photo = ({photoThumb, photoImage, photoAlt}) => {

    return (
        <Image className={styles.photo} src={photoThumb} photoimage={photoImage} alt={photoAlt} width={200} height={200} />
    )
}

export default Photo