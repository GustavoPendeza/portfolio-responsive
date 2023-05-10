import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";

interface Experience {
    img: string;
    company: string;
    name: string;
    date: string;
}

interface Params {
    experience: Experience;
}

export default function Experience({experience}: Params) {
    return (
        <div className={styles.experience}>
            <Image
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