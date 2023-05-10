import React from "react";
import styles from "../app/page.module.css";
import Hobby from "./Hobby";

interface Hobby {
    img: string;
    name: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

interface Data {
    hobbies: Hobby[];
}

export default function HobbiesList() {
    const data: Data = require("../data/hobbies.json");

    return (
        <section id={styles.hobbies} className={styles.section}>
            <h2>Hobbies</h2>

            <div id={styles.hobbiesList}>
                {
                    data.hobbies && data.hobbies.map((hobby) => {
                        return <Hobby hobby={hobby} key={hobby.name} />
                    })
                }
            </div>
        </section>
    );
}
