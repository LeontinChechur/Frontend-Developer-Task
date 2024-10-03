import { ButtonProps } from "../../../shared/interfaces/interfaces";

import "./BaseButton.scss";

export const BaseButton = ({
  title,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`baseButton ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
