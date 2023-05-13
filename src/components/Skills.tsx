import React from "react";
import styles from "../app/page.module.css";

interface Skill {
    name: string;
    percentage: number;
}

interface Props {
    skill: Skill;
}

export default function Skills({ skill }: Props) {
    const progress = {
        width: `${skill.percentage}%`,
    };

    return (
        <div className={styles.skill}>
            <span>{skill.name}</span>

            <div className={styles.progressBar}>
                <div style={progress}></div>
            </div>
        </div>
    );
}
