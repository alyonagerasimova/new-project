import React, {useEffect, useState} from 'react';
import styles from "../styles/index.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const MainContainer = ({children, keywords, title}) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    function handleScroll() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
        setActive()
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
                        <Image src="/img.png" alt="logo" width={74} height={61} priority={true}/>
                    </Link>
                    <Link className={`${styles.link} ${active ? styles.link_active: ""}`} href="/">Главная</Link>
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
                    <Image src="/img.png" alt="logo" width={74} height={61}/>
                    <p>short description</p>
                </div>
                <div className={styles.footer_services}>
                    <h2>Наши услуги</h2>
                    <div>our services</div>
                </div>
                <div className={styles.footer_form}>
                    <form>
                        <h2>Получить консультацию</h2>
                        <input type="text" placeholder="Имя"/>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Телефон"/>
                        <button>Отправить</button>
                    </form>
                </div>
                <div className={styles.footer_contact}>
                    <h2>Контактная информация</h2>
                    <div>
                        г. Самара, ул. Губанова, 3
                    </div>
                    <div>
                        ПН-ПТ 10:00-18:00 (СБ,ВС-выходные)
                    </div>
                    <div className={styles.phones}>
                        <div>8 960 819 -97-55</div>
                        <div> 8 (846) 205-50-35</div>
                    </div>
                    <div>
                        2055035@mail.ru
                    </div>
                </div>
            </footer>
        </>
    );
};

export default MainContainer;