import React from 'react';
import styles from "../styles/index.module.css";
import Link from "next/link";
import Head from "next/head";

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keywords={keywords}/>
                <title>{title}</title>
            </Head>

            <div className={styles.navbar}>
                <Link className={styles.link} href="/">Главная</Link>
                <Link className={styles.link} href="/about">О нас</Link>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;