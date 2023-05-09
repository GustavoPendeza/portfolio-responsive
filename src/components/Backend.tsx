import React from "react";
import styles from "../app/page.module.css";
import Skills from "./Skills";

interface Skill {
    name: string;
    percentage: number;
}

interface Data {
    backendSkills: Skill[];
}

export default function Frontend() {
    const data: Data = require('../data/skills.json');

    return (
        <section id={styles.backend} className={styles.section}>
            <h3 className={styles.skillsTitle}>BACK-END</h3>

            <div className={styles.skillsList}>
                {
                    data.backendSkills && data.backendSkills.map((skill) => {
                        return <Skills skill={skill} />
                    })
                }
            </div>
        </section>
    );
}
