import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid dbdbdb;
  border-radius: 3px;
`;

export const DeleteButton = styled(Button)`
  color: white;
  background: tomato;
`;

export const UpdateButton = styled(Button)`
  color: white;
  background: darkseagreen;
`;
export default Button;
