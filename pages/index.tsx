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

        <Container>
          <Topic htitle="Link e QRCode para Inscrição" anchor='link'/>
          <Button LinkHref='https://www.sympla.com.br/1-forum-municipal-do-meio-ambiente-de-tangara-da-serra__1990357' LinkTarget="_blank" LinkTitle="Fazer Inscrição"/>
        </Container>

        <Container>
          <Topic htitle="Palestras realizadas" anchor='presenca'/>
          <div className={styles.card_container}>
            <Card
              cardLink="https://s3.sa-east-1.amazonaws.com/otimize-edoc/edoc_1255/2023/06/28/3CC7E2BF5CCF249E0B905A25/Apresentacao_3_CIBM_Incendios_Florestais_Vegetacao.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY2AOIST6YOOX2GWQ%2F20230704%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230704T123725Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=4b0c07719a59ef445142bccdda53ebd909e708ac6706a7a6da5a12e54abe23b3"
              cardPhoto="/assets/img/slide-palestra.jpg"
              cardPhotoAlt="Panoragma de Incêncdio Florestal"
              cardName="Campos Filho"
              cardTitle="CAP QOBM"
            />
            <Card
              cardLink="https://s3.sa-east-1.amazonaws.com/otimize-edoc/edoc_1255/2023/06/28/3CC7E2BF5CCF249E0B905A25/Apresentacao_SEMA_do_PGRS_Digital.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY2AOIST6YOOX2GWQ%2F20230704%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230704T123725Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=4b9ae0e25e574afe219ba3b2a23ef662c0676969e75cfa465d6e5fb92bb03c54"
              cardPhoto="/assets/img/slide-palestra-1.jpg"
              cardPhotoAlt="PGRS Digital Módulo de Gestão Pública"
              cardName="Giselle Lima"
              cardTitle="Chefe UPPE"
            />
            <Card
              cardLink="https://s3.sa-east-1.amazonaws.com/otimize-edoc/edoc_1255/2023/06/28/3CC7E2BF5CCF249E0B905A25/Palestra_Responsabilizacao_ambiental_Apresentacao.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY2AOIST6YOOX2GWQ%2F20230704%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230704T123727Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=698fe8ce4fb86e4f2ee5f13e9ccd47a6b72a44d928985a5980675fb1343c17ff"
              cardPhoto="/assets/img/slide-palestra-2.jpg"
              cardPhotoAlt="A Resposabilização Ambiental como Mecanismo de Proteção e Preservação do Meio Ambiente"
              cardName="Belgrano Souza"
              cardTitle="Analista Ambiental"
            />
            <Card
              cardLink="https://s3.sa-east-1.amazonaws.com/otimize-edoc/edoc_1255/2023/06/28/3CC7E2BF5CCF249E0B905A25/PGRS_como_instrumento_da_gestao_publica.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY2AOIST6YOOX2GWQ%2F20230704%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230704T123729Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=21ba484447fadee326126af0c488fd6efa59f6376a399ec197e6a65aed00b8b3"
              cardPhoto="/assets/img/slide-palestra-3.jpg"
              cardPhotoAlt="PGRS Como Instrumento da Gestão Pública"
              cardName="Aline Cossolin"
              cardTitle="Analista Ambiental"
            />
            <Card
              cardLink="https://s3.sa-east-1.amazonaws.com/otimize-edoc/edoc_1255/2023/06/28/3CC7E2BF5CCF249E0B905A25/PROGRAMA_DE_ADOCAO_DE_ESPACOS_PUBLICOS.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY2AOIST6YOOX2GWQ%2F20230704%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230704T123735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=437140b15c0a5f5da21b50ba65c1788eaf87dd39f6d3865ab27d3813c80178c8"
              cardPhoto="/assets/img/slide-palestra-4.jpg"
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
