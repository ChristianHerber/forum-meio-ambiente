import styles from '../../styles/Home.module.css'

const Topic = ( {htitle, anchor} ) => {
    return (
        <h2 id={anchor}>{htitle}</h2>
    )
}

export default Topic