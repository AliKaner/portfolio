import classnames from "classnames";
import styles from "./styles.module.scss";
// TravelCard interface
export interface TravelCardProps {
  destination: string;
  date: string;
  description: string;
  imageUrl: string;
  className?: string;
  id?: string;
  dataTestId?: string;
  tabIndex?: number;
  ariaLabel?: string;
}

// TravelCard component
const TravelCard = ({
  destination,
  date,
  description,
  imageUrl,
  className,
  id,
  dataTestId,
  tabIndex,
  ariaLabel,
}: TravelCardProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div className={classnames(styles.container, className)}>
      <img src={imageUrl} alt={destination} className={styles.image} />
      <h2 className={styles.destination}>{destination}</h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.description}>{description}</p>
      <div
        id={id}
        data-testid={dataTestId}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        className={styles.card}
      ></div>
    </div>
  );
};

// export
export default TravelCard;
