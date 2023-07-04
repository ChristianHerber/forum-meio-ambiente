import Link from 'next/link'
import styles from './style.module.css'
import Image from 'next/image'

const Card = ({cardName, cardTitle, cardPhoto, cardPhotoAlt, cardLink}) => {
    return (
        <Link href={cardLink} target='_blank'>
        <div className={styles.card}>
            <Image src={cardPhoto} alt={cardPhotoAlt} width={318} height={170} />
            <div className={styles.card_body}>
                <h4 className={styles.card_name}>{cardName}</h4>
                <p className={styles.card_title}>{cardTitle}</p>
            </div>
        </div>
        </Link>
    )
}

export default Card