import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Description from '../components/Description'
import Topic from '../components/Topic'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import Taskbar from '../components/Taskbar'
import Photo from '../components/Photo'
import Schedule from '../components/Schedule'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>1º Fórum Municipal de Meio Ambiente</title>
        <meta name="description" content="1º Fórum Municipal de Meio Ambiente do Município de Tangará da Serra" />
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>

      <Header anchor='home'/>

      <main className={styles.main}>

        <Description />

        {/* <Container>
          <Topic htitle="Link e QRCode para Inscrição" anchor='link'/>
          <Button LinkHref='https://www.sympla.com.br/1-forum-municipal-do-meio-ambiente-de-tangara-da-serra__1990357' LinkTarget="_blank" LinkTitle="Fazer Inscrição"/>
        </Container> */}

        <Container>
          <Topic htitle="Palestras realizadas" anchor='presenca'/>
          <div className={styles.card_container}>
            <Card
              cardLink="https://tangaradaserra.mt.gov.br/site/wp-content/uploads/2023/07/slide-1-apresentacao-3-cibm-incendios-florestais-vegetacao.pdf"
              cardPhoto="/assets/img/slide-palestra-.jpg"
              cardPhotoAlt="Panoragma de Incêncdio Florestal"
              cardName="Campos Filho"
              cardTitle="CAP QOBM"
            />
            <Card
              cardLink="https://tangaradaserra.mt.gov.br/site/wp-content/uploads/2023/07/apresentacao-do-powerpoint-apresentacao-sema-do-pgrs-digital.pdf"
              cardPhoto="/assets/img/slide-palestra-1.jpg"
              cardPhotoAlt="PGRS Digital Módulo de Gestão Pública"
              cardName="Giselle Lima"
              cardTitle="Chefe UPPE"
            />
            <Card
              cardLink="https://tangaradaserra.mt.gov.br/site/wp-content/uploads/2023/07/apresentacao-do-powerpoint-palestra-responsabilizacao-ambiental-apresentacao.pdf"
              cardPhoto="/assets/img/slide-palestra-2.jpg"
              cardPhotoAlt="A Resposabilização Ambiental como Mecanismo de Proteção e Preservação do Meio Ambiente"
              cardName="Belgrano Souza"
              cardTitle="Analista Ambiental"
            />
            <Card
              cardLink="https://tangaradaserra.mt.gov.br/site/wp-content/uploads/2023/07/pgrs-como-instrumento-da-gestao-publica-pgrs-como-instrumento-da-gestao-publica.pdf"
              cardPhoto="/assets/img/slide-palestra-3.jpg"
              cardPhotoAlt="PGRS Como Instrumento da Gestão Pública"
              cardName="Aline Cossolin"
              cardTitle="Analista Ambiental"
            />
            <Card
              cardLink="https://tangaradaserra.mt.gov.br/site/wp-content/uploads/2023/07/programa-de-adocao-de-espacos-publicos-programa-de-adocao-de-espacos-publicos.pdf"
              cardPhotoAlt="PAEP Programa de Adoção de Espaços Públicos"
              cardName="SEMMEA"
              cardTitle="Tangará da Serra"
            />
          </div>
        </Container>

        <Container>
          <Topic htitle="Fotos" anchor='foto'/>
          <div className={styles.card_container}>
            <Photo photoThumb='/assets/img/fs0.jpg' photoImage='/assets/img/fs0-f.jpg' photoAlt='Foto Aqui'/>
            <Photo photoThumb='/assets/img/fs1.jpg' photoImage='/assets/img/fs1-f.jpg' photoAlt='Foto Aqui'/>
            <Photo photoThumb='/assets/img/fs2.jpg' photoImage='/assets/img/fs2-f.jpg' photoAlt='Foto Aqui'/>
            <Photo photoThumb='/assets/img/fs3.jpg' photoImage='/assets/img/fs3-f.jpg' photoAlt='Foto Aqui'/>
            <Photo photoThumb='/assets/img/fs4.jpg' photoImage='/assets/img/fs4-f.jpg' photoAlt='Foto Aqui'/>
            <Photo photoThumb='/assets/img/fs5.jpg' photoImage='/assets/img/fs5-f.jpg' photoAlt='Foto Aqui'/>
            <Photo photoThumb='/assets/img/fs6.jpg' photoImage='/assets/img/fs6-f.jpg' photoAlt='Foto Aqui'/>
          </div>
        </Container>

        <Container>
          <Topic htitle="Cronograma do Evento" anchor='cronograma'/>
            <Schedule />
        </Container>

      </main>

      <Footer />
      <Taskbar />

    </div>
  )
}

export default Home
