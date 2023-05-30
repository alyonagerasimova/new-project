import Link from "next/link";
import styles from "../styles/index.module.scss";
import MainContainer from "../components/MainContainer";
import data from "../db.json";
import About from "./about";
import Certificate from "./certificate";
import Image from "next/image";
import Partition from "../components/Partition";

const Index = () => {
    return (
        <div className={styles.main_page}>
            {/*<h1 id="main" style={{color: "blue", textAlign: "center", marginBottom: "10px"}}>Главная страница</h1>*/}
            {/*<MainContainer title="Главная страница" keywords={'abc test'}>*/}
            <section>
                <div  className={styles.image}>
                    <Image src="/high-view-toy-model-house-keys.jpg" alt="img" width={1920} height={640} />
                    <h1>АН ООО “Лучший Дом” </h1>
                    <h2>Все операции с недвижимостью</h2>
                </div>

            </section>

            <section className={styles.first_section}>
                <Partition/>
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
            <section className={styles.second_section}>
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
            <section className={styles.section}>
                <Certificate/>
            </section>

            <section className={styles.section}>
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
            </section>
            {/*</MainContainer>*/}
        </div>
    );
};

export default Index;

Index.getLayout