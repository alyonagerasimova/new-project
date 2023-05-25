import React from 'react';
import styles from "../styles/index.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta lang={'ru'} keywords={keywords}/>
                <title>{title}</title>
            </Head>

            <header className={styles.navbar}>
                <nav className={styles.link_block}>
                    <Link className={styles.link} href="#main">
                        <Image src="/img.png" alt="logo" width={74} height={61}/>
                    </Link>
                    <Link className={styles.link} href="#main">Главная</Link>
                    <Link className={styles.link} href="#about">О нас</Link>
                    <Link className={styles.link} href="#certificate">Достижения</Link>
                </nav>

                <div className={styles.info_block}>
                    <div className={styles.phones}>
                        <div>8 960 819 -97-55</div>
                        <div> 8 (846) 205-50-35</div>
                    </div>
                    <div>
                        <Link className={styles.link} href="#map">г. Самара, ул. Губанова, 3</Link>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <h1 style={{color: "blue", textAlign: "center", marginBottom: "10px"}}>{title}</h1>
                <div className={styles.main__content}>
                    {children}
                </div>
            </main>
            <footer className={styles.footer}>
                footer
            </footer>
        </>
    );
};

export default MainContainer;