import { S } from "./Button.styles";

const Button = ({ type, title, onClick, className }) => {
  return (
    <S.Button className={className} onClick={onClick} type={type}>
      {title}
    </S.Button>
  );
};

export default Button;
