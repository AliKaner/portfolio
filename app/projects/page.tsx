"use client";

import React, { useMemo } from "react";
import { useProjects } from "../../hooks/useProjects";
import MainLayout from "../../components/layouts/MainLayout";
import Loader from "../../components/commons/Loader";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

const ProjectsPage: React.FC = () => {
  const { data: projects, isLoading, error, refetch } = useProjects();
  const router = useRouter();

  const generateGradient = (seed: string) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h1 = Math.abs(hash) % 360;
    const h2 = (h1 + 60) % 360;
    return `linear-gradient(135deg, hsl(${h1}, 70%, 45%), hsl(${h2}, 70%, 45%))`;
  };

  const { proProjects, myProjects } = useMemo(() => {
    const list = projects || [];
    return {
      proProjects: list.filter((p: any) => p.is_pro),
      myProjects: list.filter((p: any) => !p.is_pro),
    };
  }, [projects]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className={styles.loading}>
          <Loader size="lg" />
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className={styles.error}>
          <h2>Error loading projects</h2>
          <p>{error.message}</p>
          <button onClick={() => refetch()}>Retry</button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Projects</h1>
          <p>Explore my latest projects and work</p>
        </div>

        <div className={styles.content}>
          <div className={styles.mainSection}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Projects I Worked On</h2>
              </div>
              <div className={styles.grid}>
                {proProjects.map((project: any) => (
                  <div
                    key={project.id}
                    className={styles.card}
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, "_blank");
                      } else {
                        router.push(`/projects/${project.id}`);
                      }
                    }}
                    role="button"
                  >
                    <div className={styles.imageContainer}>
                      {project.is_ongoing && (
                        <div className={styles.ongoingBadge}>Ongoing</div>
                      )}
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className={styles.image}
                        />
                      ) : (
                        <div
                          className={styles.placeholder}
                          style={{
                            background: generateGradient(
                              project.name || String(project.id)
                            ),
                          }}
                        >
                          <div className={styles.nameBadge}>{project.name}</div>
                        </div>
                      )}
                      {project.image && (
                        <div className={styles.nameBadge}>{project.name}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {proProjects.length === 0 && (
                <div className={styles.empty}>
                  <p>No professional projects found.</p>
                </div>
              )}
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>My Projects</h2>
              </div>
              <div className={styles.grid}>
                {myProjects.map((project: any) => (
                  <div
                    key={project.id}
                    className={styles.card}
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, "_blank");
                      } else if (project.id != null) {
                        router.push(`/projects/${project.id}`);
                      }
                    }}
                    role="button"
                  >
                    <div className={styles.imageContainer}>
                      {project.is_ongoing && (
                        <div className={styles.ongoingBadge}>Ongoing</div>
                      )}
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className={styles.image}
                        />
                      ) : (
                        <div
                          className={styles.placeholder}
                          style={{ background: generateGradient(project.name) }}
                        >
                          <div className={styles.nameBadge}>{project.name}</div>
                        </div>
                      )}
                      {project.image && (
                        <div className={styles.nameBadge}>{project.name}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {myProjects.length === 0 && (
                <div className={styles.empty}>
                  <p>No personal projects added yet.</p>
                </div>
              )}
            </section>
          </div>

          <div className={styles.sidebar}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Mini Projects</h2>
              </div>
              <div className={styles.miniProjectsList}>
                <div
                  className={styles.miniProjectItem}
                  onClick={() => router.push("/projects/mini-projects")}
                  role="button"
                >
                  <h3>View All Mini Projects</h3>
                  <p>Calculator, Todo App, Weather App and more...</p>
                </div>
                <div
                  className={styles.miniProjectItem}
                  onClick={() =>
                    router.push("/projects/mini-projects/calculator")
                  }
                  role="button"
                >
                  <h3>Calculator</h3>
                  <p>A simple calculator with basic operations</p>
                </div>
                <div
                  className={styles.miniProjectItem}
                  onClick={() =>
                    router.push("/projects/mini-projects/todo-app")
                  }
                  role="button"
                >
                  <h3>Todo App</h3>
                  <p>A simple todo application with local storage</p>
                </div>
                <div
                  className={styles.miniProjectItem}
                  onClick={() =>
                    router.push("/projects/mini-projects/what-is-my-ip")
                  }
                  role="button"
                >
                  <h3>What is my IP</h3>
                  <p>Display your current IP address</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
