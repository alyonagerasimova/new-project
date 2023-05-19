import React, {useState} from 'react';
import MainContainer from "../components/MainContainer";
import Image from "next/image";
import styles from "../styles/certificate.module.scss";

const imageUrls = [
    '/certificates/1.jpg',
    '/certificates/2.jpg',
    '/certificates/3.jpg',
    '/certificates/4.jpg',
    `/certificates/5.jpg`,
    '/certificates/6.jpg',
    '/certificates/7.jpg',
    '/certificates/8.jpg',
    '/certificates/9.jpg',
    `/certificates/10.jpg`,
    '/certificates/11.jpg',
    '/certificates/12.jpg',
    '/certificates/13.jpg',
    '/certificates/14.jpg',
    `/certificates/15.jpg`,
]
const Certificate = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    function plusSlides(n) {
        setSlideIndex(current => {
            if (current + n < imageUrls.length && current + n > 0) {
                return current + n;
            } else if (current + n >= imageUrls.length) {
                return 0;
            } else if (current + n <= 0) {
                return imageUrls.length - 1;
            }
        });
    }

    function currentSlide(n) {
        setSlideIndex(current => current = n);
    }

    return (
        <MainContainer title="Сертификаты">
            <div className={styles.slideshow_container}>

                <div className={styles.fade}>
                    <Image src={imageUrls[slideIndex]} alt="certificate" width={419} height={592}/>
                </div>

                <a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>
            </div>

            <div className={styles.pagination}>
                {imageUrls.map((url, i) => (
                    <span key={i} className={styles.dot} onClick={() => currentSlide(i)}></span>
                ))}
                <div className={styles.numbertext}>{`${slideIndex + 1} из ${imageUrls.length}`}</div>
            </div>
        </MainContainer>
    );
};

export default Certificate;