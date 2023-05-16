import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import { api } from "@/lib/axios";

interface Project {
    topics: string[];
}

interface Props {
    total_count: number | undefined;
    activeTopic: string | null;
    setActiveTopic: (arg: string | null) => void;
    setPage: (arg: number) => void;
}

export default function ProjectFilter({
    total_count,
    activeTopic,
    setActiveTopic,
    setPage,
}: Props) {
    const [apiResponse, setApiResponse] = useState<Project[] | null>(null);
    const [tags, setTags] = useState<Array<string> | null>(null);
    const uniqueTopics: Array<string> = [];
    const [topicsVisibility, setTopicsVisibility] = useState(false);

    async function getProjects() {
        const response = await api.get(
            `users/GustavoPendeza/repos?sort=pushed&per_page=100`
        );

        setApiResponse(response.data);
    }

    function getTopics() {
        apiResponse
            ? apiResponse.map((project) => {
                  for (const topic of project.topics) {
                      const isDuplicate = uniqueTopics.find(
                          (obj) => obj === topic
                      );
                      !isDuplicate ? uniqueTopics.push(topic) : null;
                  }
              })
            : null;

        uniqueTopics.sort();

        setTags(uniqueTopics);
    }

    function showTopics() {
        topicsVisibility
            ? setTopicsVisibility(false)
            : setTopicsVisibility(true);
    }

    function filter(selectedTopic: string) {
        activeTopic !== selectedTopic
            ? setActiveTopic(selectedTopic)
            : setActiveTopic(null);

        setPage(1);
    }

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        getTopics();
    }, [apiResponse]);

    return (
        <>
            <section className={styles.section} id={styles.filterSection}>
                <button id={styles.filterButton} onClick={showTopics}>
                    <div>
                        <h3 id={styles.projectsTitle}>
                            Projetos ({total_count})
                        </h3>

                        <img
                            id={styles.imgFilter}
                            src="filter.svg"
                            alt="Filter"
                        />
                    </div>
                </button>

                {topicsVisibility ? (
                    <div id={styles.filterList}>
                        <div className={styles.tagList}>
                            {apiResponse && tags
                                ? tags.map((topic) => {
                                      return (
                                          <button
                                              className={
                                                  activeTopic === topic
                                                      ? styles.activeTopic
                                                      : styles.buttonTopic
                                              }
                                              onClick={() => filter(topic)}
                                              key={topic}
                                          >
                                              #{topic}
                                          </button>
                                      );
                                  })
                                : null}
                        </div>
                    </div>
                ) : null}
            </section>

            {activeTopic ? (
                <div className={styles.removeFilterDiv}>
                    <button
                        className={styles.removeFilterButton}
                        onClick={() => filter(activeTopic)}
                    >
                        <span>#{activeTopic}</span>
                        <img id={styles.x} src="x.svg" />
                    </button>
                </div>
            ) : null}
        </>
    );
}
