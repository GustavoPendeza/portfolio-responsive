import React from "react";
import styles from "../app/page.module.css";

interface Experience {
    img: string;
    company: string;
    name: string;
    date: string;
}

interface Props {
    experience: Experience;
}

export default function Experience({experience}: Props) {
    return (
        <div className={styles.experience}>
            <img
                src={experience.img}
                alt={experience.company}
            />

            <div className={styles.experienceText}>
                <span>{experience.date}</span>

                <div>
                    <h4>{experience.name}</h4>

                    <h5>{experience.company}</h5>
                </div>
            </div>
        </div>
    );
}
