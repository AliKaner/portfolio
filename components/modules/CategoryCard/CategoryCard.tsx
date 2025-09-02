"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    path: string;
    imageURL: string | null;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(category.path);
  };

  return (
    <div className={styles.categoryCard} onClick={handleClick}>
      <div className={styles.imageContainer}>
        {category.imageURL && !imageError ? (
          <img
            src={category.imageURL}
            alt={category.name}
            className={styles.image}
            onError={() => {
              console.error(`❌ Image failed to load: ${category.imageURL}`);
              setImageError(true);
            }}
          />
        ) : (
          <div className={styles.placeholder}>{category.name}</div>
        )}
        <div className={styles.titleOverlay}>
          <h3 className={styles.name}>{category.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
