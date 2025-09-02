"use client";

import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Favorites from "../../components/modules/Favorites";
import styles from "./page.module.scss";

const AboutMePage: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Ali_Kaner_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.aboutCard}>
          <div className={styles.cardContent}>
            <div className={styles.introduction}>
              <h2>Hi, I'm Ali Kaner</h2>
              <p>
                I am a passionate frontend developer with expertise in modern
                web technologies. I love creating beautiful and functional user
                experiences.
              </p>
            </div>

            <div className={styles.cvDownload}>
              <button
                onClick={handleDownloadCV}
                className={styles.downloadButton}
              >
                Download CV
              </button>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <h3>You can follow me on Letterboxd, Goodreads and Steam</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://letterboxd.com/Ali_Kaner/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img
                  src="/letterboxd.svg"
                  alt="Letterboxd"
                  width="32"
                  height="32"
                />
              </a>
              <a
                href="https://www.goodreads.com/user/show/167600396-ali-kaner"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img
                  src="/goodreads.svg"
                  alt="Goodreads"
                  width="32"
                  height="32"
                />
              </a>
              <a
                href="https://steamcommunity.com/id/AliKaner/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img src="/steam.svg" alt="Steam" width="32" height="32" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.favoritesSection}>
          <Favorites />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutMePage;
