// src/components/common/category-card/index.tsx
`use client`;

// CategoryCard import
import classnames from "classnames";
import styles from "./styles.module.scss";
import AppImage from "@/components/common/app-image";
import Typography from "../typography";

// CategoryCard interface
export interface CategoryCardProps {
  id?: string;
  imageUrl: string;
  ImageBlurPlaceholder?: string;
  title?: string;
  className?: string;
  tabIndex?: number;
  ariaLabel?: string;
  path?: string;
}

// CategoryCard component
const CategoryCard = ({
  id,
  title = "",
  imageUrl,
  className,
  ImageBlurPlaceholder,
  tabIndex,
  ariaLabel,
  path,
}: CategoryCardProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div
      className={classnames(styles.container, className)}
      id={id}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      <AppImage
        id={`CategoryCard-Image-${id}`}
        alt={`CategoryCard-Image-${id}`}
        imageUrl={imageUrl}
        className={styles.image}
        ImageBlurPlaceholder={ImageBlurPlaceholder}
      />
      <Typography className={styles.title} text={title} />
    </div>
  );
};

// export
export default CategoryCard;
