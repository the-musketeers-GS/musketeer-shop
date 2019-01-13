import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-start;
`;

export const Label = styled.label`
  font: 1em;
  color: black;
  text-align: left;
`;

export const Input = styled.input`
  color: initial;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #dbdbdb;
  border-radius: 2px;
`;

export default Form;
