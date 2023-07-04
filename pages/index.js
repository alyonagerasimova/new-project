import React from 'react';
import styles from "../styles/index.module.scss";
import Certificate from "./certificate";
import Image from "next/image";
import Partition from "../components/Partition";
import Contact from "../components/Contact";
import TeamSection from "../components/TeamSection";
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

const Index = () => {
    return (
        <div className={styles.main_page}>
            {/*<h1 id="main" style={{color: "blue", textAlign: "center", marginBottom: "10px"}}>Главная страница</h1>*/}
            {/*<MainContainer title="Главная страница" keywords={'abc test'}>*/}
            <section className={styles.post_header}>
                <div className={styles.image}>
                    <Image className={styles.img}
                           src="/high-view-toy-model-house-keys.jpg"
                           alt="img"
                        // fill={true}
                           width="0"
                           height="0"
                           sizes="100vw"
                           placeholder={"blur"}
                           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcwvC/HgAFVwI0U4SedgAAAABJRU5ErkJggg=="
                           onLoad={(e) => <Spin indicator={antIcon}/>}
                    />

                    <div className={styles.image_text}>
                        <Image src="/img.png" alt="logo" width={74} height={61}/>
                        <h1>АН ООО “Лучший Дом” </h1>
                        <h2>все операции с недвижимостью</h2>
                    </div>

                </div>

            </section>

            <Partition/>
            <section id="services" className={styles.first_section}>
                <h2>АН ООО “Лучший Дом” предлагает услуги: </h2>
                {/*<div>Мы предоставляем следующие услуги, качество и выполнение которых гарантируем:</div>*/}
                <ul>
                    <li>
                        <Image src="/first-section/1.jpg" alt="img1" width={350} height={219}/>
                        <div>консультации</div>
                    </li>
                    <li>
                        <Image src="/first-section/2.jpg" alt="img2" width={350} height={219}/>
                        <div>помощь в сборе пакета необходимых документов</div>
                    </li>
                    <li>
                        <Image src="/first-section/3.jpg" alt="img3" width={350} height={219}/>
                        <div>использование электронного документооборота</div>
                    </li>
                </ul>

            </section>

            <Partition/>
            <section id="about" className={styles.second_section}>
                <h2>Почему именно мы? </h2>
                <div>Обращаясь к нам, вы получаете профессиональное решение любых вопросов рыночного оборота
                    недвижимости
                </div>
                <ul>
                    <li>
                        <Image src="/second-section/1.jpg" alt="img1" width={250} height={250}/>
                        <div>Мы многофункциональны (поможем купить, снять квартиру или офис)</div>
                    </li>
                    <li>
                        <Image src="/second-section/2.jpg" alt="img2" width={250} height={250}/>
                        <div>Бесплатная консультация</div>
                    </li>
                    <li>
                        <Image src="/second-section/3.jpg" alt="img3" width={250} height={250}/>
                        <div>Учтем все Ваши пожелания</div>
                    </li>
                    <li>
                        <Image src="/second-section/4.jpg" alt="img4" width={250} height={250}/>
                        <div>Мы сотрудничаем с банками</div>
                    </li>
                </ul>
            </section>
            {/*<div>*/}
            {/*    {data.aboutText[0].description}*/}
            {/*</div>*/}

            {/*<Partition/>*/}
            {/*<section className={styles.section}>*/}
            {/*    <About/>*/}
            {/*</section>*/}

            <Partition/>
            <section id="certificate" className={styles.section_achievements}>
                <div className={styles.achievements}>
                    <div className={styles.achievements__sellers}>
                        <h1>Свыше 100</h1>
                        счастливых продавцов
                    </div>
                    <div className={styles.achievements__buyers}>
                        <h1>Более 100</h1>
                        счастливых покупателей
                    </div>
                </div>
            </section>

            <Partition/>
            <section className={styles.section}>
                <Certificate/>
            </section>

            <Partition/>
            <section>
                <TeamSection/>
            </section>

            <Partition/>
            <section>
                <h2>Прайс-лист</h2>
                <button>Скачать</button>
            </section>

            <Partition/>
            <section>
                <h2>Наши партнеры (банки, с которыми сотрудничаем)</h2>
            </section>

            <Partition/>
            <section id="contacts" className={styles.section}>
                <Contact/>
            </section>

            <Partition/>

            <section className={styles.section}>
                <div className={styles.section_map}>
                    <h3>Мы на карте</h3>
                    <div id="map" style={{position: "relative", overflow: "hidden"}}>
                        <a
                            href="https://yandex.ru/maps/51/samara/?utm_medium=mapframe&utm_source=maps"
                            style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0"}}>
                            Самара
                        </a>
                        <a
                            href="https://yandex.ru/maps/51/samara/house/ulitsa_gubanova_3/YUkYdAZkSUEBQFtpfX51eHhjbA==/?ll=50.213602%2C53.247794&utm_medium=mapframe&utm_source=maps&z=17.09"
                            style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>
                            Улица Губанова, 3 — Яндекс Карты
                        </a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=50.213602%2C53.247794&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM5MDc4MBI60KDQvtGB0YHQuNGPLCDQodCw0LzQsNGA0LAsINGD0LvQuNGG0LAg0JPRg9Cx0LDQvdC-0LLQsCwgMyIKDS_bSEIVZf9UQg%2C%2C&z=17.09"
                            width="860" height="400" frameBorder="1" allowFullScreen={true}
                            style={{position: "relative"}}></iframe>
                    </div>
                </div>
            </section>
            {/*</MainContainer>*/}
        </div>
    );
};

export default Index;