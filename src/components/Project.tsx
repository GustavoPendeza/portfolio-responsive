import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import { api } from "@/lib/axios";

interface Project {
    name: string;
    description: string;
    html_url: string;
}

interface Params {
    project: Project;
}

interface ApiResponse {
    names: string[];
}

export default function Project({ project }: Params) {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

    async function getTags() {
        const response = await api.get(
            `/repos/GustavoPendeza/${project.name}/topics`
        );

        setApiResponse(response.data);
    }

    useEffect(() => {
        getTags();
    }, []);

    return (
        <section className={styles.section}>
            <div id={styles.tagList}>
                {apiResponse?.names && apiResponse?.names.length !== 0
                    ? apiResponse.names.map((tag) => {
                          return <span className={styles.tag}>#{tag}</span>;
                      })
                    : <span className={styles.tag}>Esse projeto não possui tags</span>}
            </div>

            <h2 className={styles.projectName}>{project.name}</h2>

            <p className={styles.description}>{project.description}</p>

            <a href={project.html_url} className={styles.codeButton}>
                Code
            </a>
        </section>
    );
}
