import styles from './style.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>1º Fórum Municipal do</h1>
            <h1 className={styles.subtitle}>Meio Ambiente</h1>
            <p>Dias 05 e 06 de Junho de 2023</p>
            <p>Auditório do Centro Cultural Pedro Alberto Tayano Filho</p>
        </header>
    )
}

export default Header