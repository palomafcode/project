import styles from './Frase.module.css'
function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>esse é meu componente com frase</p>
        </div>
    )


}
export default Frase
