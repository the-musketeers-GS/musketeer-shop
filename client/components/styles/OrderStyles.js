import styled from 'styled-components';

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid whitesmoke;
  box-shadow: gray;
  padding: 2rem;
  border-top: 10px solid black;
  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 1px solid whitesmoke;
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
  .order-item {
    border-bottom: 1px solid whitesmoke;
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    img {
      width: 100%;

      object-fit: cover;
    }
  }
`;
export default OrderStyles;
