import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>1º Fórum Municipal de Meio Ambiente</title>
        <meta name="description" content="1º Fórum Municipal de Meio Ambiente do Município de Tangará da Serra" />
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Image src="/assets/img/logo.png" className={styles.forumLogo} alt="1º Fórum Municipal de Meio Ambiente" width={200} height={200} />
        <p>O primeiro Fórum Municipal do Meio Ambiente de Tangará da Serra é promovido pela Prefeitura Municipal, por meio da Secretaria Municipal de Meio Ambiente.</p>
        <p>O evento acontecerá entre os dias 05 e 06 de junho de 2023 no auditório do Centro Cultural Pedro Alberto Tayano Filho.</p>
        <p>O fórum contará com palestras, mesas redondas e debates acerca dos principais temas que envolvem a gestão ambiental do nosso município.</p>
        <p>Serão palestrantes convidados da SEMA, ANA, Polícia Militar de Proteção Ambiental, UNEMAT, entre outros.
        As inscrições são limitadas e serão abertas no dia 17 de maio de 2023, podendo ser realizadas no link abaixo.</p>

        <h2>Link para Inscrição</h2>
        <a href="#" className={styles.btn}>Fazer Inscrição</a>

        <h2>Presenças Confirmadas</h2>

        <h2>Fotos</h2>

        <h2>Cronograma do Evento</h2>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
