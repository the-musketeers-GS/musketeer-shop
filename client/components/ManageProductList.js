import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';

import {
  DeleteButton,
  UpdateButton,
  Button,
  ViewButton
} from './styles/Button';

const ManageProductList = ({ product, handleDelete }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.stockQty}</td>
      <td>
        <ViewButton onClick={() => history.push(`/products/${product.id}`)}>
          View
        </ViewButton>
      </td>
      <td>
        <UpdateButton
          onClick={() => history.push(`/manage/product/${product.id}`)}
        >
          Edit
        </UpdateButton>
      </td>
      <td>
        <DeleteButton onClick={e => handleDelete(e, product)}>
          Delete
        </DeleteButton>
      </td>
    </tr>
  );
};

export default ManageProductList;
