import Head from 'next/head'
import Navbar from './Navbar'
import NavbarMob from './NavbarMob'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Mirko Maggiore - Web Designer</title>
                <meta name='keywords' content='web design, web designer, graphic designer, front-end developer, siti web, web3, web designer parma, siti web parma, blockchain, crypto'/>
                <meta namae= 'description' content='Costruisci il tuo sito web, trova clienti, vendi i tuoi prodotti online.'/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"/>
            </Head>
            <Navbar />
            <NavbarMob />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
