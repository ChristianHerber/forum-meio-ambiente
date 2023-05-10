import styles from './style.module.css'

const Button = ({LinkHref,LinkTitle, LinkTarget}) => {
    return (
        <a href={LinkHref} target={LinkTarget} className={styles.btn}>{LinkTitle}</a>
    )
}

export default Button