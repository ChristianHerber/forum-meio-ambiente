import styles from './style.module.css'

const Item = ({ScheduleHour, ScheduleDescription}) => {
    return (
        <p className={styles.schedule__item}><strong>{ScheduleHour}</strong> - {ScheduleDescription}</p>
    )
}

export default Item