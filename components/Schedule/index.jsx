import Item from './Item'
import Title from './Title'
import styles from './style.module.css'

const Schedule = () => {
    return (
        <>
            <Title ScheduleTitle='05 de Junho'/>
            <Item ScheduleHour='18:00' ScheduleDescription='Credenciamento'/>
            <Item ScheduleHour='19:00' ScheduleDescription='Abertura'/>
            <Item ScheduleHour='19:30' ScheduleDescription='Palestra: Fiscalização Ambiental - SEMA'/>
            <Item ScheduleHour='20:00' ScheduleDescription='Palestra: Fiscalização Ambiental - Polícia Ambiental'/>
            <Item ScheduleHour='20:30' ScheduleDescription='Intervalo'/>
            <Item ScheduleHour='20:45' ScheduleDescription='Palestra: Gestão de Resíduos Sólidos - SEMA'/>
            <Item ScheduleHour='21:05' ScheduleDescription='Palestra: PGRS Digital - SEMMEA'/>
            <Item ScheduleHour='21:35' ScheduleDescription='Palestra: Programa de Adoção de Espaço Público (PAEP) - SEMMEA'/>
            <Item ScheduleHour='21:45' ScheduleDescription='Encerramento'/>

            <Title ScheduleTitle='06 de Junho'/>
            <Item ScheduleHour='18:00' ScheduleDescription='Credenciamento'/>
            <Item ScheduleHour='19:00' ScheduleDescription='Lançamento e Apresentação do Manual de Arborização - SEMMEA'/>
            <Item ScheduleHour='19:30' ScheduleDescription='Palestra: Programa Águas para o Futuro - MPMT'/>
            <Item ScheduleHour='20:30' ScheduleDescription='Intervalo'/>
            <Item ScheduleHour='20:45' ScheduleDescription='Mesa Redonda - Conservação de Recursos Hídricos e Pagamento por Serviços Ambientais - PSA'/>
            <Item ScheduleHour='21:45' ScheduleDescription='Encerramento'/>

        </>
    )
}

export default Schedule