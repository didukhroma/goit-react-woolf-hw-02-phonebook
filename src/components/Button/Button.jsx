import { StyledButton } from './Button.styled';

function Button({ title, cbOnClick, id }) {
  const handleClick = () => cbOnClick(id);

  return <StyledButton onClick={handleClick}>{title}</StyledButton>;
}

export default Button;
