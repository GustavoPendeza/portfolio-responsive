"use client";

import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import Project from "./Project";
import { api } from "@/lib/axios";

interface Project {
    name: string;
    description: string;
    html_url: string;
}

export default function ProjectsList() {
    const [apiResponse, setApiResponse] = useState<Project[] | null>(null);

    async function getProjects() {
        const response = await api.get(
            `users/GustavoPendeza/repos?sort=pushed&per_page=5&page=1`
        );

        setApiResponse(response.data);
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div id={styles.projectsList}>
            <section className={styles.section}>
                <h3 id={styles.projectsTitle}>Projetos</h3>
            </section>

            {apiResponse ? (
                apiResponse.map((project) => {
                    return <Project project={project} key={project.name} />;
                })
            ) : (
                <>
                    <p>nao deu</p> {/* MUDAR */}
                </>
            )}
        </div>
    );
}
