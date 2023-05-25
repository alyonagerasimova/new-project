import Link from "next/link";
import styles from "../styles/index.module.scss";
import MainContainer from "../components/MainContainer";
import data from "../db.json";
import About from "./about";
import Certificate from "./certificate";

const Index = () => {
    return (
        <div className={styles.mainPage}>
            <h1 id="main" style={{color: "blue", textAlign: "center", marginBottom: "10px"}}>Главная страница</h1>
            {/*<MainContainer title="Главная страница" keywords={'abc test'}>*/}
            <div className={styles.content}>
                <h2>АН ООО “Лучший Дом” предлагает услуги: </h2>
                <ul>
                    <li>консультации по условиям программ ипотечного кредитования и акционных предложений ПАО
                        “Сбербанк России”;
                    </li>
                    <li>помощь в подаче заявки, сборе пакета необходимых документов;</li>
                    <li>использование электронного документооборота напрямую со специалистом ПАО “Сбербанк России” -
                        без необходимости предварительного посещения филиала банка.
                    </li>
                </ul>
            </div>

            <div>
                {data.aboutText[0].description}
            </div>
            <About/>
            <Certificate/>

            <section>
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