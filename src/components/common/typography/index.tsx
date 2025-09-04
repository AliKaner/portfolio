// src/components/common/typography/index.tsx

// Typography import
import classnames from "classnames";
import styles from "./styles.module.scss";

// Typography interface
export interface TypographyProps {
  text?: string;
  size?: "small" | "medium" | "large" | "xlarge";
  color?: "primary" | "secondary" | "tertiary";
  weight?: "normal" | "bold";
  display?: "block" | "inline";
  className?: string;
}

// Typography component
const Typography = ({
  text = "",
  size = "medium",
  color = "primary",
  display = "block",
  weight = "normal",
  className,
}: TypographyProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <p
      className={classnames(
        styles.container,
        styles[size],
        styles[color],
        styles[display],
        styles[weight],
        className
      )}
    >
      {text}
    </p>
  );
};

// export
export default Typography;
