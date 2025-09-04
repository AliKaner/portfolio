"use client";

import React from "react";
import { useBookCharacters } from "../../hooks/useBookCharacters";
import MainLayout from "../../components/layouts/MainLayout";
import Loader from "../../components/commons/Loader";
import styles from "./page.module.scss";

const BookCharactersPage: React.FC = () => {
  const { data: characters, isLoading, error, refetch } = useBookCharacters();

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
          <h2>Error loading book characters</h2>
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
          <h1>Book Characters</h1>
          <p>Discover characters from various books</p>
        </div>

        <div className={styles.grid}>
          {characters?.map((character) => (
            <div key={character.id} className={styles.card}>
              <div className={styles.imageContainer}>
                {character.image ? (
                  <img
                    src={character.image}
                    alt={character.name}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.placeholder}>No Image</div>
                )}
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{character.name}</h3>
                <p className={styles.description}>{character.description}</p>

                <div className={styles.meta}>
                  <div className={styles.bookInfo}>
                    <span className={styles.bookId}>
                      Book ID: {character.book_id}
                    </span>
                  </div>
                  <div className={styles.dates}>
                    <span className={styles.date}>
                      Created:{" "}
                      {new Date(character.created_at).toLocaleDateString()}
                    </span>
                    <span className={styles.date}>
                      Updated:{" "}
                      {new Date(character.update_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {characters?.length === 0 && (
          <div className={styles.empty}>
            <p>No book characters found.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default BookCharactersPage;
