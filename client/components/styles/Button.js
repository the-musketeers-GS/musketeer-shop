import styled from 'styled-components';

export const Button = styled.button`
  color: tomato;
  font-size: 0.85em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid dbdbdb;
  border-radius: 3px;
`;

export const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 2rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
`;

export const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const CheckoutButton = styled.button`
  background: none;
  border: 0;
  font-size: 3rem;
`;

export const DeleteButton = styled(Button)`
  color: white;
  background: indianred;
  &:hover {
    color: black;
    cursor: pointer;
`;

export const AddButton = styled(Button)`
  color: white;
  background: darkseagreen;
  &:hover {
    color: black;
    cursor: pointer;
`;

export const AddProduct = styled(Button)`
  color: white;
  background: blueviolet;
  font-size: 1.2em;
  &:hover {
    color: black;
    cursor: pointer;
`;

export const UpdateButton = styled(Button)`
  color: white;
  background: sandybrown;
  &:hover {
    color: black;
    cursor: pointer;
`;

export const ViewButton = styled(Button)`
  color: white;
  background: lightseagreen;
  &:hover {
    color: black;
    cursor: pointer;
`;

export default Button;
