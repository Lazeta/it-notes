import styled from "styled-components";

const StyledComponent = styled.button`
  background-color: #4d4d61;
  border: none;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 12px 10px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #2ba7bd;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateX(3px);
  }

  &:active {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transform: translateX(0px) scale(1);
  }
`;

const Button = ({ type, title, onClick, className }) => {
  return (
    <StyledComponent className={className} onClick={onClick} type={type}>
      {title}
    </StyledComponent>
  );
};

export default Button;
