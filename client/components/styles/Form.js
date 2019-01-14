import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: left;
  align-content: flex-start;
  margin: 0 40% 1.5em 35%;
`;

export const Label = styled.label`
  color: cadetblue;
  font-weight: bold;
  align-items: left;
  padding: 0 12px 0 3px;
`;

export const LabelUpdate = styled.label`
  color: chocolate;
  font-weight: bold;
  padding: 0 12px 0 3px;
`;

export const Input = styled.input`
  color: gray;
  font-size: 1em;
  text-align: left;
  padding: 0.5em;
  border: 2px solid #dbdbdb;
  border-radius: 2px;
  margin: auto 0 1em 0;
`;

export const Select = styled.select`
  color: gray;
  font-size: 1em;
  text-align: left;
  padding: 0.5em;
  border: 2px solid #dbdbdb;
  border-radius: 2px;
  margin: auto 0 1em 0;
`;

export default Form;
