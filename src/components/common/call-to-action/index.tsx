// src/components/common/call-to-action/index.tsx
`use client`;

// CallToAction import
import Button from "../button";
import Typography from "../typography";
import styles from "./styles.module.scss";
import classnames from "classnames";

// CallToAction interface
export interface CallToActionProps {
  id?: string;
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  dataTestId?: string;
}

// CallToAction component
const CallToAction = ({
  id,
  className,
  title,
  description,
  buttonText,
  onClick,
  dataTestId,
}: CallToActionProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div className={classnames(styles.container, className)} id={id}>
      {title && (
        <Typography
          className={styles.title}
          text={title}
          size="xlarge"
          weight="bold"
        />
      )}
      {description && (
        <Typography
          className={styles.description}
          text={description}
          size="medium"
        />
      )}
      {onClick && buttonText && (
        <Button
          className={styles.button}
          onClick={onClick}
          dataTestId={dataTestId}
          id={`CallToAction-Button-${id}`}
          ariaLabel={`CallToAction-Button-${id}`}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

// export
export default CallToAction;
