import styles from './style.module.css'
import Image from 'next/image'

const Button = ({LinkHref,LinkTitle, LinkTarget}) => {
    return (
        <div className={styles.btn__container}>
            <a href={LinkHref} target={LinkTarget} className={styles.btn}>{LinkTitle}</a>
            <Image src='/assets/img/qrcode_inscricao.png' alt='Faça sua inscrição lendo o QRCode' width={200} height={200}/>
        </div>
    )
}

export default Button