import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";

export default function Profile() {
    return (
        <section id={styles.profile} className={styles.section}>
            <Image
                id={styles.profileimg}
                src="https://github.com/GustavoPendeza.png"
                alt="Gustavo Pendeza Profile Image"
            />

            <h2>Gustavo Pendeza</h2>
            <span id={styles.subtitle}>Full-stack developer</span>

            <div id={styles.contacts}>
                <div>
                    <Image src="github.svg" alt="GitHub Gustavo Pendeza" />
                    <a href="https://github.com/GustavoPendeza" target="_blank">
                        github.com/GustavoPendeza
                    </a>
                </div>

                <div>
                    <Image src="linkedin.svg" alt="Linkedin Gustavo Pendeza" />
                    <a
                        href="https://www.linkedin.com/in/gustavo-seiki-pendeza"
                        target="_blank"
                    >
                        linkedin.com/in/gustavo-seiki-pendeza
                    </a>
                </div>

                <div>
                    <Image src="email.svg" alt="Email Gustavo Pendeza" />
                    <a href="mailto:g.pendeza@hotmail.com" target="_blank">
                        g.pendeza@hotmail.com
                    </a>
                </div>
            </div>

            <p>
                Desenvolvedor em início de carreira. <br />
                Atualmente estudando: NodeJS (AdonisJS / TypeScript) e
                React/React Native.
            </p>
        </section>
    );
}
