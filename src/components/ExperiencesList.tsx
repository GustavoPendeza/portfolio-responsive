import React from "react";
import styles from "../app/page.module.css";
import Experience from "./Experience";

interface Experience {
    img: string;
    company: string;
    name: string;
    date: string;
}

interface Data {
    experiences: Experience[];
}

export default function ExperiencesList() {
    const data: Data = require('../data/experiences.json');

    return (
        <section id={styles.experiences} className={styles.section}>
            <h2>Experiências</h2>

            <div id={styles.experiencesList}>
                {
                    data.experiences && data.experiences.map((experience) => {
                        return <Experience experience={experience} />
                    })
                }
            </div>
        </section>
    );
}
