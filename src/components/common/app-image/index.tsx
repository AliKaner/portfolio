// src/components/common/image/index.tsx

// AppImage import
import classnames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";

// AppImage interface
export interface AppImageProps {
  imageUrl: string;
  ImageBlurPlaceholder?: string;
  className?: string;
  id?: string;
  alt: string;
}

// AppImage component
const AppImage = ({
  imageUrl,
  className,
  id,
  alt,
  ImageBlurPlaceholder,
}: AppImageProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div className={classnames(styles.container, className)}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        blurDataURL={ImageBlurPlaceholder}
        className={styles.img}
      />
    </div>
  );
};

// export
export default AppImage;
