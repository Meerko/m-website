import Link from 'next/Link'
import Image from 'next/image'
import Logo from '../public/img/mirko-maggiore-logo.png'
import navbarStyles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    let router = useRouter();
    return (
        <div className={navbarStyles.nav}>
            <div className={navbarStyles.logomenu}>
                <Link href='/'><Image src={Logo} alt='Mirko Maggiore Web Design Logo'/></Link>
                <Link href='/'>Mirko Maggiore</Link>
            </div>
            <nav className={navbarStyles.menu}>
                <ul>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/about'>Works</Link>
                    </li>
                    <li>
                        <Link href='/about'>Contact</Link>
                    </li>

                    {router.locales.map(locale =>(
                        <li key={locale}> 
                                <Link href={router.asPath} locale={locale}> 
                                    {locale}
                                </Link> 
                        </li>
                    ))}
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar
