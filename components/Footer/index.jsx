import styles from './style.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footer__client}>
                <Image src='/assets/img/brasao-p.png' width={66} height={64}/>
                <div className={styles.footer__description}>
                    <p><strong>Prefeitura Municipal de Tangará da Serra</strong></p>
                    <p><strong>Secretaria Municipal de Meio Ambiente</strong></p>
                </div>
            </div>

            <div className={styles.footer__copy}>
                <small className={styles.footer__author}>
                    <span>Christian Herber Santos</span> <strong>Analista Desenvolvedor de Sistemas</strong>
                </small>
            </div>
        </footer>

        </>
    )
}

export default Footer