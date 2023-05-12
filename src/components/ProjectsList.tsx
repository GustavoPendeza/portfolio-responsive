"use client";

import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import Project from "./Project";
import { api } from "@/lib/axios";

interface Project {
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    homepage: string;
}

export default function ProjectsList() {
    const [apiResponse, setApiResponse] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState(false);

    async function getProjects() {
        try {
            setLoading(true);
            const response = await api.get(
                `users/GustavoPendeza/repos?sort=pushed&per_page=10&page=1`
            );
            console.log(response.data);

            setApiResponse(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    if (loading) {
        return (
            <div className={styles.loadingContainer} id={styles.projectsList}>
                <div className={styles.loading}></div>
            </div>
        );
    }

    return (
        <div id={styles.projectsList}>
            <section className={styles.section}>
                <h3 id={styles.projectsTitle}>Projetos</h3>
            </section>

            {apiResponse
                ? apiResponse.map((project) => {
                      return <Project project={project} key={project.name} />;
                  })
                : null}
        </div>
    );
}
