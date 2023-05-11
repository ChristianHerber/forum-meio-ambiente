import styles from './style.module.css'

const TaskbarItem = ({itemLink, itemText}) => {
    return (
        <a herf={itemLink} style={styles.taskbar_item}>{itemText}</a>
    )
}

export default TaskbarItem