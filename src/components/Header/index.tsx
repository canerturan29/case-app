
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';



export default function Header({ shop }: any) {


    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <Image
                    src="/pokeball.svg"
                    width={40}
                    height={40}
                    alt="pokeball"
                    className={`${styles.logo} ${styles.rotatingLogo}`}
                />
                <h1>Pokemon Shop</h1>
            </div>
            <ul className={styles.navLinks}>
                <Link href={"/"}><li>Home</li></Link>
                {shop ? <Link href={"/pokemon/list"}><li>Shop</li></Link> : <></>}

            </ul>
        </header>
    )
}