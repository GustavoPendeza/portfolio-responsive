"use client";

import styles from "./page.module.css";
import Frontend from "@/components/Frontend";
import Backend from "@/components/Backend";
import ExperiencesList from "@/components/ExperiencesList";
import HobbiesList from "@/components/HobbiesList";
import ProjectsList from "@/components/ProjectsList";
import Profile from "@/components/Profile";
import { useState } from "react";
import ProjectFilter from "@/components/ProjectFilter";
import Pagination from "@/components/Pagination";

export default function Home() {
    const [total_count, setTotal_count] = useState<number | undefined>(
        undefined
    );
    const [activeTopic, setActiveTopic] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const projectsPerPage = 10;

    return (
        <>
            <main className={styles.main}>
                <Profile />

                <Frontend />

                <Backend />

                <div id={styles.projectsList}>
                    <ProjectFilter
                        total_count={total_count}
                        activeTopic={activeTopic}
                        setActiveTopic={setActiveTopic}
                        setPage={setPage}
                    />

                    <ProjectsList
                        setTotal_count={setTotal_count}
                        activeTopic={activeTopic}
                        page={page}
                        projectsPerPage={projectsPerPage}
                    />

                    <Pagination
                        total_count={total_count}
                        setPage={setPage}
                        projectsPerPage={projectsPerPage}
                    />
                </div>

                <ExperiencesList />

                <HobbiesList />
            </main>

            <footer>
                <div id={styles.createdBy}>
                    <span>
                        created by{" "}
                        <a href="https://github.com/GustavoPendeza">
                            Gustavo Pendeza
                        </a>{" "}
                        - devChallenges.io
                    </span>
                </div>
            </footer>
        </>
    );
}
