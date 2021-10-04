import Link from 'next/Link'
import styles from '../styles/Layout.module.css'
import useTranslation from 'next-translate/useTranslation'

const Button = () => {
    let { t } = useTranslation ();
    return (
        
        <div className={styles.button}>
            <Link href='/'>{t("common:button")}</Link>
        </div>

    )
}

export default Button 
