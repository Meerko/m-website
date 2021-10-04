import homeStyles from '../styles/Home.module.css'
import styles from '../styles/Layout.module.css'
import Header from '../components/Header';
import Button from '../components/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import webDesign from '../public/img/webdesign-icon.png';
import graphicDesign from '../public/img/graphcdesign-icon.png';
import consulting from '../public/img/consulting-icon.png';
import mirkoPic from '../public/img/about-mirko-maggiore.jpg';

export default function Home() {
  let { t } = useTranslation ();

  return (
    <div>
      <Header />
      <section className={homeStyles.services}>
        <div className={homeStyles.services__item}>
          <Image src={webDesign} alt='Web Design servizio offerto da Mirko Maggiore'/>
          <h3>Web Design</h3>
        </div>
        <div className={homeStyles.services__item}>
          <Image src={graphicDesign} alt='Graphic Design servizio offerto da Mirko Maggiore'/>
          <h3>Graphic Design</h3>
        </div>
        <div className={homeStyles.services__item}>
          <Image src={consulting} alt='Consulenza servizio offerto da Mirko Maggiore'/>
          <h3>Consulting</h3>
        </div>
      </section>
      <section className={styles.grid}>
        <div className={homeStyles.about}>
          <div className={styles.col, homeStyles.about__description}>
            <h3>{t("common:about")}</h3>
            <p>{t("common:aboutDescr")}</p>
            <Button/>
          </div>
          <div className={styles.col}>
            <Image src={mirkoPic} alt='Mirko Maggiore Web e Graphic Designer a Parma'/>
          </div>
        </div>
      </section>
    </div>
  )
}
