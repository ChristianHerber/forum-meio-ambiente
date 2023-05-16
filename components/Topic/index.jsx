import styles from './style.module.css'

const Topic = ( {htitle, anchor} ) => {
    return (
        <h2 id={anchor} className={styles.topic__title}>{htitle}</h2>
    )
}

export default Topic