import Image from 'next/image'
import Button from './Button'
import headerStyles from '../styles/Header.module.css'
import styles from '../styles/Layout.module.css'
import HeaderImage from '../public/img/mirko-maggiore-web-pc.png'
import useTranslation from 'next-translate/useTranslation'

const Header = () => {
    let { t } = useTranslation ();
    
    return (
        <div className={headerStyles.header}>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <h1 className={headerStyles.title}> {t("common:title")} </h1> 
                    <h2> {t("common:subtitle")} </h2>
                    <p className={headerStyles.description}>{t("common:description")}</p>
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
