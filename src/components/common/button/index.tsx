// Button interface
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  dataTestId?: string;
  tabIndex?: number;
  ariaLabel?: string;
}

// Button component
const Button = ({
  children,
  onClick,
  className,
  id,
  disabled,
  dataTestId,
  tabIndex,
  ariaLabel,
}: ButtonProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <button
      className={className}
      onClick={onClick}
      id={id}
      disabled={disabled}
      data-testid={dataTestId}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

// export
export default Button;
