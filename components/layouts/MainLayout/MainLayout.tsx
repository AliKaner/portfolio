"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MainLayout.module.scss";

export interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className = "",
}) => {
  const pathname = usePathname();

  const getBreadcrumbText = () => {
    const routeMap: Record<string, string> = {
      "/": "Home",
      "/about-me": "About Me",
      "/projects": "Projects",
      "/book-characters": "Characters",
      "/categories": "Categories",
      "/favorites": "Favorites",
      "/contact": "Contact",
      "/arts": "Arts",
      "/books": "Books",
      "/components": "Components",
      "/mentorship": "Mentorship",
      "/games": "Games",
      "/articles": "Articles",
    };
    return routeMap[pathname] || "Page";
  };

  return (
    <div className={`${styles.layout} ${className}`}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.title}>
              <h1>Ali Kaner</h1>
            </Link>
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbText}>
                {getBreadcrumbText()}
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.categories}>
              <h3>Categories</h3>
              <div className={styles.categoryColumns}>
                <div className={styles.categoryColumn}>
                  <Link href="/arts" className={styles.categoryLink}>
                    Arts
                  </Link>
                  <Link href="/books" className={styles.categoryLink}>
                    Books
                  </Link>
                  <Link href="/projects" className={styles.categoryLink}>
                    Projects
                  </Link>
                  <Link href="/about-me" className={styles.categoryLink}>
                    About Me
                  </Link>
                  <Link href="/hire-me" className={styles.hireMeButton}>
                    Hire Me
                  </Link>
                </div>
                <div className={styles.categoryColumn}>
                  <Link href="/components" className={styles.categoryLink}>
                    Components
                  </Link>
                  <Link href="/mentorship" className={styles.categoryLink}>
                    Mentorship
                  </Link>
                  <Link href="/contact" className={styles.categoryLink}>
                    Contact Me
                  </Link>
                  <Link href="/games" className={styles.categoryLink}>
                    Games
                  </Link>
                  <Link href="/articles" className={styles.categoryLink}>
                    Articles
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <h3>Follow Me</h3>
              <div className={styles.socialRows}>
                <div className={styles.socialRow}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Twitter
                  </a>
                  <a
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Medium
                  </a>
                </div>
                <div className={styles.socialRow}>
                  <a
                    href="https://goodreads.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Goodreads
                  </a>
                  <a
                    href="https://letterboxd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Letterboxd
                  </a>
                  <a
                    href="https://steam.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Steam
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>
              &copy; 2024 Ali Kaner. Built with Next.js, Supabase, and React
              Query.
            </p>
            <a
              href="https://buymeacoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyMeCoffee}
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
