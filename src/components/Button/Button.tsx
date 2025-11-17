import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "contained" | "outlined" | "text";
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "warning";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "contained",
  disabled = false,
  className = "",
  variant = "primary",
}) => {
  const variantClass = `btn--${variant}`; // e.g. btn--primary

  const typeClass =
    type === "outlined"
      ? "btn--outlined"
      : type === "text"
      ? "btn--text"
      : "btn--contained";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantClass} ${typeClass} ${
        disabled ? "btn--disabled" : ""
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
