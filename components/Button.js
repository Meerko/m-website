import Link from 'next/Link'
import styles from '../styles/Layout.module.css'

const Button = () => {
    return (
        
        <div className={styles.button}>
            <Link href='/'>Contattami</Link>
        </div>

    )
}

export default Button 
