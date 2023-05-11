import styles from './style.module.css'
import TaskbarItem from '../TaskbarItem'
import {AiFillHome} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'
import {IoMdPhotos} from 'react-icons/io'
import {IoCalendar} from 'react-icons/io5'

const Taskbar = () => {
    return (
        <div className={styles.taskbar_container}>
            <TaskbarItem className={styles.taskbar_item} itemLink='#home' itemText={<AiFillHome size={35}/>}/>
            <TaskbarItem className={styles.taskbar_item} itemLink='#link' itemText={<FiExternalLink size={35}/>}/>
            <TaskbarItem className={styles.taskbar_item} itemLink='#foto' itemText={<IoMdPhotos size={35}/>}/>
            <TaskbarItem className={styles.taskbar_item} itemLink='#cronograma' itemText={<IoCalendar size={35}/>}/>
        </div>
    )
}

export default Taskbar