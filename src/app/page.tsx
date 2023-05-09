import styles from "./page.module.css";
import Frontend from "@/components/Frontend";
import Backend from "@/components/Backend";
import ExperiencesList from "@/components/ExperiencesList";
import HobbiesList from "@/components/HobbiesList";
import ProjectsList from "@/components/ProjectsList";
import Profile from "@/components/Profile";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Profile />

                <Frontend />

                <Backend />

                <ProjectsList />

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
