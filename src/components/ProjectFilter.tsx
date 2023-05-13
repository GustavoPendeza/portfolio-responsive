import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import { api } from "@/lib/axios";

interface Project {
    topics: string[];
}

interface Props {
    setNumberOfProjects: (arg: number) => void;
}

export default function ProjectFilter({ setNumberOfProjects }: Props) {
    const [apiResponse, setApiResponse] = useState<Project[] | null>(null);
    const [tags, setTags] = useState<Array<string> | null>(null);
    const uniqueTopics: Array<string> = [];
    const [showTopics, setShowTopics] = useState(false);

    async function getProjects() {
        const response = await api.get(
            `users/GustavoPendeza/repos?sort=pushed&per_page=100&page=1`
        );

        setApiResponse(response.data);
        setNumberOfProjects(response.data.length);
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

    function onClick() {
        showTopics ? setShowTopics(false) : setShowTopics(true);
    }

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        getTopics();
    }, [apiResponse]);

    return (
        <section className={styles.section} id={styles.filterSection}>
            <button id={styles.filterButton} onClick={onClick}>
                <div>
                    <h3 id={styles.projectsTitle}>
                        Projetos ({apiResponse?.length})
                    </h3>

                    <img id={styles.imgFilter} src="filter.svg" alt="Filter" />
                </div>
            </button>

            {showTopics ? (
                <div id={styles.filterList}>
                    <div className={styles.tagList}>
                        {apiResponse && tags
                            ? tags.map((topic) => {
                                  return (
                                      <button
                                          className={styles.buttonTopic}
                                          onClick={() => {}}
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
    );
}
