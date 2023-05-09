import React from "react";
import styles from "../app/page.module.css";
import Project from "./Project";

export default function ProjectsList() {
    return (
        <div id={styles.projectsList}>
            <section className={styles.section}>
                <h3 id={styles.projectsTitle}>Projetos</h3>
            </section>

            <Project />
        </div>
    );
}
