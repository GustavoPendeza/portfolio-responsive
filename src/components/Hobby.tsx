import React from "react";
import styles from "../app/page.module.css";

interface Hobby {
    img: string;
    name: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

interface Props {
    hobby: Hobby;
}

export default function Hobby({ hobby }: Props) {
    return (
        <div className={styles.hobbie}>
            <img src={hobby.img} alt={hobby.name} title={hobby.title} />

            <div>
                <h4>{hobby.name}</h4>

                <span>{hobby.description}</span>
                {hobby.link && hobby.linkText ? (
                    <span>
                        <br />
                        <a href={hobby.link} target="_blank">
                            {hobby.linkText}
                        </a>
                    </span>
                ) : null}
            </div>
        </div>
    );
}
