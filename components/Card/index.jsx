import styles from './style.module.css'
import Image from 'next/image'

const Card = ({cardName, cardTitle, cardPhoto, cardPhotoAlt}) => {
    return (
        <div className={styles.card}>
            <Image src={cardPhoto} alt={cardPhotoAlt} width={320} height={380} />
            <div className={styles.card_body}>
                <h4 className={styles.card_name}>{cardName}</h4>
                <p className={styles.card_title}>{cardTitle}</p>
            </div>
        </div>
    )
}

export default Card