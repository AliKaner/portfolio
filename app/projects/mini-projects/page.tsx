"use client";

import React from "react";
import MainLayout from "../../../components/layouts/MainLayout";
import styles from "./page.module.scss";

const MiniProjectsPage: React.FC = () => {
  const miniProjects = [
    {
      id: "calculator",
      title: "Calculator",
      description: "A simple calculator with basic operations",
      path: "/projects/mini-projects/calculator",
      status: "completed",
    },
    {
      id: "todo-app",
      title: "Todo App",
      description: "A simple todo application with local storage",
      path: "/projects/mini-projects/todo-app",
      status: "completed",
    },
    {
      id: "what-is-my-ip",
      title: "What is my IP",
      description: "Display your current IP address",
      path: "/projects/mini-projects/what-is-my-ip",
      status: "completed",
    },
    {
      id: "weather-app",
      title: "Weather App",
      description: "A weather application using OpenWeather API",
      path: "/projects/mini-projects/weather-app",
      status: "in-progress",
    },
  ];

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Mini Projects</h1>
          <p>Small projects and experiments</p>
        </div>

        <div className={styles.grid}>
          {miniProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.status}>
                  <span
                    className={`${styles.statusBadge} ${
                      styles[project.status]
                    }`}
                  >
                    {project.status === "completed"
                      ? "Completed"
                      : "In Progress"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MiniProjectsPage;
