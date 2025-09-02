"use client";

import React from "react";
import favoritesData from "../../../lib/favorites.json";
import styles from "./Favorites.module.scss";

interface FavoriteItem {
  title: string;
  img: string;
  link: string;
}

interface FavoriteCategory {
  title: string;
  img: string;
  link: string;
  subtitle: string;
  subtitleLink: string;
  items: FavoriteItem[];
}

interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
}

interface FavoritesData {
  socialMedia: {
    subtitle: string;
    links: SocialMediaLink[];
  };
  favorites: FavoriteCategory[];
}

const Favorites: React.FC = () => {
  const handleItemClick = (link: string) => {
    window.open(link, "_blank");
  };

  const handleSocialMediaClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleSubtitleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.favoritesContainer}>
      {favoritesData.favorites.map(
        (category: FavoriteCategory, categoryIndex: number) => (
          <div key={categoryIndex} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <p
              className={styles.categorySubtitle}
              onClick={() => handleSubtitleClick(category.subtitleLink)}
            >
              {category.subtitle}
            </p>
            <div className={styles.itemsContainer}>
              {category.items.map((item: FavoriteItem, itemIndex: number) => (
                <div
                  key={itemIndex}
                  className={`${styles.itemCard} ${
                    itemIndex === 0
                      ? styles.firstItem
                      : itemIndex === 1
                      ? styles.secondItem
                      : styles.thirdItem
                  }`}
                  onClick={() => handleItemClick(item.link)}
                >
                  <div className={styles.imageContainer}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={styles.itemImage}
                    />
                    <div className={styles.numberOverlay}></div>
                    <div className={styles.hoverOverlay}>
                      <div className={styles.titleOverlay}>
                        <span className={styles.itemTitle}>{item.title}</span>
                      </div>
                    </div>
                  </div>
                  <span className={styles.itemTitle}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Favorites;
