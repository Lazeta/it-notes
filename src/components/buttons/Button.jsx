import { S } from "./Button.styles";

const Button = ({ key, type, title, onClick, className, ariaExpanded, ariaControls }) => {
  return (
    <S.Button key={key} className={className} onClick={onClick} type={type} aria-expanded={ariaExpanded} aria-controls={ariaControls}>
      {title}
    </S.Button>
  );
};

export default Button;
