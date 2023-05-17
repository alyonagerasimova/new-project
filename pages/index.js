import Link from "next/link";
import styles from "../styles/index.module.css";
import MainContainer from "../components/MainContainer";
import data from "../db.json";

const Index = () => {
    return (
        <div>
            <MainContainer title="Главная страница">
                    <h1>Главная страница</h1>
                    <div className={styles.main}>
                        {data.aboutText[0].description}
                    </div>

                    <footer className={styles.footer}>
                        <div style={{position: "relative", overflow: "hidden"}}>
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
                                width="560" height="400" frameBorder="1" allowFullScreen={true}
                                style={{position: "relative"}}></iframe>
                        </div>
                    </footer>

            </MainContainer>
        </div>
    );
};

export default Index;