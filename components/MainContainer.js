import React from 'react';
import styles from "../styles/index.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keywords={keywords}/>
                <title>{title}</title>
            </Head>

            <div className={styles.navbar}>
                <Link className={styles.link} href="/">
                    <Image src="/img.png" alt="logo" width={74} height={61}/>
                </Link>
                <Link className={styles.link} href="/">Главная</Link>
                <Link className={styles.link} href="/about">О нас</Link>
                <Link className={styles.link} href="/certificate">Достижения</Link>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;