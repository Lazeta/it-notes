import { S } from "./Button.styles";

const Button = ({
  type = "button",
  text,
  icon,
  ariaLabel,
  title,
  onClick,
  className,
  ariaExpanded,
  ariaControls
}) => {
  const computedAriaLabel = (!text && !title && icon) ? ariaLabel : undefined;

  return (
    <S.Button
      className={className}
      onClick={onClick}
      type={type}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-label={computedAriaLabel}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {(text || title) && <span className="btn-text">{text || title}</span>}
    </S.Button>
  );
};

export default Button;
