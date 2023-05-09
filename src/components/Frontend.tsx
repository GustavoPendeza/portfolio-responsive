import React from "react";
import styles from "../app/page.module.css";
import Skills from "./Skills";

interface Skill {
    name: string;
    percentage: number;
}

interface Data {
    frontendSkills: Skill[];
}

export default function Frontend() {
    const data: Data = require('../data/skills.json');

    return (
        <section id={styles.frontend} className={styles.section}>
            <h3 className={styles.skillsTitle}>FRONT-END</h3>

            <div className={styles.skillsList}>
                {
                    data.frontendSkills && data.frontendSkills.map((skill) => {
                        return <Skills skill={skill} />
                    })
                }
            </div>
        </section>
    );
}
