import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Description from '../components/Description'
import Topic from '../components/Topic'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import Taskbar from '../components/Taskbar'

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

        <Container>
          <Topic htitle="Link para Inscrição" anchor='link'/>
          <Button LinkHref='https://forumsemmeatga.com.br' LinkTarget="_blank" LinkTitle="Fazer Inscrição"/>
        </Container>

        <Container>
          <Topic htitle="Presenças Confirmadas" anchor='presenca'/>
          <div className={styles.card_container}>
            <Card cardPhoto="/assets/img/profile-photo.jpg" cardPhotoAlt="" cardName="Taline de Almeida" cardTitle="Bióloga" />
            <Card cardPhoto="/assets/img/profile-photo.jpg" cardPhotoAlt="" cardName="Alexandra Silva" cardTitle="Engenheira" />
            <Card cardPhoto="/assets/img/profile-photo.jpg" cardPhotoAlt="" cardName="Maria Júlia" cardTitle="Eng Sanitarista" />
            <Card cardPhoto="/assets/img/profile-photo.jpg" cardPhotoAlt="" cardName="Yasmin Santos" cardTitle="Bióloga" />
          </div>
        </Container>

        <Container>
          <Topic htitle="Fotos" anchor='foto'/>
        </Container>

        <Container>
          <Topic htitle="Cronograma do Evento" anchor='cronograma'/>
        </Container>

      </main>

      <Footer />
      <Taskbar />

    </div>
  )
}

export default Home
