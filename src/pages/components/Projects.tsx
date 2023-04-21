import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";
import github from "../images/github.svg";
import link from "../images/link.svg";
import { LoadingPage } from "./Loading";

import Link from "next/link";

import { api } from "~/utils/api";

export default function Projects() {
  const { data, isLoading } = api.posts.getAll.useQuery();

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {isLoading ? (
          <div className={styles.item}>
            <LoadingPage />
          </div>
        ) : null}

        {!isLoading && !data ? (
          <div className={styles.item}>
            <LoadingPage />
          </div>
        ) : null}

        {data?.map((project) => (
          <div key={project.id} className={styles.item}>
            <div className={styles.title}>
              <h1>{project.title}</h1>
              <h2 className={styles.date}>
                {project.date.getMonth()}/{project.date.getFullYear()}
              </h2>
            </div>
            <div className={styles.description}>
              <div className={styles.text}>
                <p>{project.content}</p>
                <br />
                <p>Technology: {project.tech}</p>
              </div>
              <div className={styles.linkContainer}>
                {project.github ? (
                  <Link
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      className={styles.link}
                      src={github as string}
                      alt="github"
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                  </Link>
                ) : null}
                {project.link ? (
                  <Link
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      className={styles.link}
                      src={link as string}
                      alt="link"
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
