import React from 'react';
import styles from "../styles/index.module.scss";
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

                <div className={styles.link_block}>
                    <Link className={styles.link} href="/">
                        <Image src="/img.png" alt="logo" width={74} height={61}/>
                    </Link>
                    <Link className={styles.link} href="/">Главная</Link>
                    <Link className={styles.link} href="/about">О нас</Link>
                    <Link className={styles.link} href="/certificate">Достижения</Link>
                </div>

                <div className={styles.info_block}>
                    <div className={styles.phones}>
                        <div>8 960 819 -97-55</div>
                        <div> 8 (846) 205-50-35</div>
                    </div>
                    <div>г. Самара, ул. Губанова, 3 </div>
                </div>
            </div>
            <div>
                <h1 style={{color: "blue", textAlign: "center", marginBottom: "10px"}}>{title}</h1>
                {children}
            </div>
        </>
    );
};

export default MainContainer;