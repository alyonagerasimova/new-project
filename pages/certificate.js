import React from 'react';
import MainContainer from "../components/MainContainer";
import Image from "next/image";
import styles from "../styles/certificate.module.scss";

const Certificate = () => {
    return (
        <MainContainer title="Сертификаты">
            <div className={styles.content}>
                <h1>Сертификаты</h1>
                <div className={styles.scan}>
                    <Image src='/certificates/20170811_18365401.jpg_1502481726.jpg' alt="certificate" width={419} height={592}/>
                </div>
                <div className={styles.slider}>
                    <div className="pagination"></div>
                </div>
            </div>
        </MainContainer>

    );
};

export default Certificate;