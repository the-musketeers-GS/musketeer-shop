import styled from 'styled-components';

const StyledNav = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: black;
    /* @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    } */
    &:before {
      content: '';
      width: 2px;
      background: lightgray;
      height: 100%;
      left: 0;
      position: absolute;
      /* transform: skew(-20deg); */
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: gray;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
      /* @media (max-width: 700px) {
        width: calc(100% - 10px);
      } */
    }
  }
`;

export default StyledNav;
