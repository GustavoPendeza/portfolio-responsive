import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import Project from "./Project";
import { api } from "@/lib/axios";
import ProjectFilter from "./ProjectFilter";

interface Project {
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    homepage: string;
}

interface Data {
    total_count: number;
    items: Project[];
}

interface Props {
    setTotal_count: (arg: number | undefined) => void;
    activeTopic: string | null;
    page: number;
}

export default function ProjectsList({ setTotal_count, activeTopic, page }: Props) {
    const [apiResponse, setApiResponse] = useState<Data | null>(null);
    const [loading, setLoading] = useState(false);

    async function getProjects() {
        try {
            setLoading(true);
            if (activeTopic) {
                const response = await api.get(
                    `/search/repositories?sort=updated&per_page=10&page=${page}&q=user:gustavopendeza+topic:${activeTopic}`
                );

                setApiResponse(response.data);
            } else {
                const response = await api.get(
                    `/search/repositories?sort=updated&per_page=10&page=${page}&q=user:gustavopendeza`
                );

                setApiResponse(response.data);
            }
        } catch (error) {
            console.log(error);
            alert(
                "Houve um erro. \n\nVocê pode ter excedido o limite de requisições. Tente novamente em alguns instantes."
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProjects();
    }, [activeTopic, page]);

    useEffect(() => {
        setTotal_count(apiResponse?.total_count);
    }, [apiResponse]);

    if (loading) {
        return (
            <div className={styles.loadingContainer} id={styles.projectsList}>
                <div className={styles.loading}></div>
            </div>
        );
    }

    return (
        <>
            {apiResponse?.items
                ? apiResponse.items.map((project) => {
                      return <Project project={project} key={project.name} />;
                  })
                : null}
        </>
    );
}
