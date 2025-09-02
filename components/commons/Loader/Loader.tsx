import React from "react";
import styles from "./Loader.module.scss";

export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "primary",
  className = "",
}) => {
  const loaderClasses = [
    styles.loader,
    styles[size],
    styles[color],
    className,
  ].join(" ");

  return (
    <div className={loaderClasses}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
