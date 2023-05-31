import React, {useEffect} from 'react';
import styles from "../styles/index.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const MainContainer = ({children, keywords, title}) => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    function handleScroll(){
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    return (
        <>
            <Head>
                <meta lang={'ru'} keywords={keywords}/>
                <title>{title}</title>
            </Head>

            <header className={styles.navbar}>
                <nav className={styles.link_block}>
                    <Link className={styles.link} href="/">
                        <Image src="/img.png" alt="logo" width={74} height={61}/>
                    </Link>
                    <Link className={styles.link} href="/">Главная</Link>
                    <Link className={styles.link} href="#about">О нас</Link>
                    <Link className={styles.link} href="#services">Наши услуги</Link>
                    <Link className={styles.link} href="#certificate">Достижения</Link>
                    <Link className={styles.link} href="#contacts">Контакты</Link>

                    <div className={styles.info_block}>
                        <div className={styles.phones}>
                            <div>8 960 819 -97-55</div>
                            <div> 8 (846) 205-50-35</div>
                        </div>
                        <div>
                            <Link className={styles.link} href="#map">г. Самара, ул. Губанова, 3</Link>
                        </div>
                    </div>
                </nav>

                <div className={styles.progress_container}>
                    <div className={styles.progress_bar} id="myBar"></div>
                </div>
            </header>

            <main className={styles.main}>
                <h1 style={{color: "blue", textAlign: "center", marginBottom: "10px"}}>{title}</h1>
                <div className={styles.main__content}>
                    {children}
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footer_desc}>
                    short description
                </div>
                <div className={styles.footer_services}>
                    our services
                </div>
                <div className={styles.footer_form}>
                    form
                </div>
                <div className={styles.footer_contact}>
                    contacts
                </div>
            </footer>
        </>
    );
};

export default MainContainer;