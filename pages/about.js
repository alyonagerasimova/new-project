import React, {useState} from 'react';
import Link from "next/link";
import styles from "../styles/about.module.scss";
import MainContainer from "../components/MainContainer";

const About = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Don't panic! или решение Ваших проблем c ООО Лучший Дом",
            date: "08 Февраля 2012",
            description: "Вы поняли, что пришло время улучшить жилищные условия своей " +
                "семьи?Ваши бизнес-дела идут настолько хорошо, что Вы начали задумываться о расширении торговых " +
                "площадей? Или же Вы решили переехать в наш славный город, и Вам негде ..."
        },
        {
            id: 2,
            title: "ООО Лучший Дом: эксклюзивные инструменты работы",
            date: "08 Февраля 2012",
            description: "«Мы стали работать с риэлтором из «Агентства N», подписали договор о сотрудничестве, а он " +
                "за два месяца привел одного покупателя (те посмотрели и ушли) – и все…»… Сколько раз Вы слышали " +
                "подобное от Ваших друзей, знакомых, родственников, к..."
        },
    ]);

    return (
        // <MainContainer title="О нас">
        <>
            <h1 id="about" style={{color: "blue", textAlign: "center", marginBottom: "10px"}}>О нас</h1>
            <section className={styles.about}>
                <ul>
                    {items.map(item =>
                        <li key={item.id}>
                            <Link href={`/about/${item.id}`}>
                                <div>{item.title}</div>
                            </Link>
                            <div>{item.date}</div>
                            <div>{item.description}</div>
                        </li>
                    )}
                </ul>
            </section>
        </>
        // </MainContainer>
    );
};

export default About;