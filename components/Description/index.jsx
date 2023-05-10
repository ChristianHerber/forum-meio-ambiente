import Image from 'next/image'
import styles from './style.module.css'

const Description = () => {
    return (
        <>
            <Image src="/assets/img/logo.png" className={styles.forumLogo} alt="1º Fórum Municipal de Meio Ambiente" width={200} height={200} />
            <p>O primeiro Fórum Municipal do Meio Ambiente de Tangará da Serra é promovido pela Prefeitura Municipal, por meio da Secretaria Municipal de Meio Ambiente.</p>
            <p>O evento acontecerá entre os dias 05 e 06 de junho de 2023 no auditório do Centro Cultural <q>Pedro Alberto Tayano Filho</q>.</p>
            <p>O fórum contará com palestras, mesas redondas e debates acerca dos principais temas que envolvem a gestão ambiental do nosso município.</p>
            <p>Serão palestrantes convidados da SEMA, ANA, Polícia Militar de Proteção Ambiental, UNEMAT, entre outros.
            As inscrições são limitadas e serão abertas no dia 17 de maio de 2023, podendo ser realizadas no link abaixo.</p>
        </>
    )
}

export default Description