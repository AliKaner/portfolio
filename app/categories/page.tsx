"use client";

import React from "react";
import { useCategories } from "../../hooks/useCategories";
import MainLayout from "../../components/layouts/MainLayout";
import Loader from "../../components/commons/Loader";
import styles from "./page.module.scss";

const CategoriesPage: React.FC = () => {
  const { data: categories, isLoading, error, refetch } = useCategories();

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
          <h2>Error loading categories</h2>
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
          <h1>Categories</h1>
          <p>Browse all available categories</p>
        </div>

        <div className={styles.grid}>
          {categories?.map((category) => (
            <div key={category.id} className={styles.card}>
              <div className={styles.imageContainer}>
                {category.imageURL ? (
                  <img
                    src={category.imageURL}
                    alt={category.name}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.placeholder}>No Image</div>
                )}
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{category.name}</h3>
                <p className={styles.path}>{category.path}</p>
              </div>
            </div>
          ))}
        </div>

        {categories?.length === 0 && (
          <div className={styles.empty}>
            <p>No categories found.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
