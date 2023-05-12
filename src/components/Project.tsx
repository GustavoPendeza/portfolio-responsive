import React from "react";
import styles from "../app/page.module.css";
interface Project {
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    homepage: string;
}

interface Params {
    project: Project;
}

export default function Project({ project }: Params) {
    return (
        <section className={styles.section}>
            <div id={styles.tagList}>
                {project.topics && project.topics.length !== 0 ? (
                    project.topics.map((tag) => {
                        return (
                            <span className={styles.tag} key={tag}>
                                #{tag}
                            </span>
                        );
                    })
                ) : (
                    <span className={styles.tag}>
                        Esse projeto não possui tags
                    </span>
                )}
            </div>

            <h2 className={styles.projectName}>{project.name}</h2>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.demoCode}>
                {project.homepage ? (
                    <a
                        href={project.homepage}
                        className={styles.demoButton}
                        target="_blank"
                    >
                        Demo
                    </a>
                ) : null}

                <a
                    href={project.html_url}
                    className={styles.codeButton}
                    target="_blank"
                >
                    Code
                </a>
            </div>
        </section>
    );
}
