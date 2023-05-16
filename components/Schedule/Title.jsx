import styles from './style.module.css'
import {BsCalendarEvent} from 'react-icons/bs'

const Title = ({ScheduleTitle}) => {
    return (
        <h3 className={styles.schedule__title}>
            {ScheduleTitle}
        </h3>
    )
}

export default Title