import Image from 'next/image'
import Button from './Button'
import headerStyles from '../styles/Header.module.css'
import styles from '../styles/Layout.module.css'
import HeaderImage from '../public/img/mirko-maggiore-web-pc.png'

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <h1 className={headerStyles.title}>
                    Costruisci la tua identità online, trova clienti, vendi i tuoi prodotti.
                    </h1> 
                    <h2>Ciao sono Mirko, Web & Communication Designer.</h2>
                    <p className={headerStyles.description}>Aiuto aziende e prfessionisti a raggiungere i loro obiettivi e comunicare con efficacia 
                        sul web sviluppando siti web professionali, dinamici e performanti.</p>
                    <Button />
                </div>
                <div className={styles.col}>
                    <Image src={HeaderImage} alt='Mirko Maggiore - Web Design pc'/>
                </div>
            </div>
        </div>
    )
}

export default Header
