import React from 'react';
import { Link } from 'react-router-dom';

import { DeleteButton } from './styles/Button';

const ManageProductList = ({ product, handleDelete }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.stockQty}</td>
      <td>
        <Link to={`/products/${product.id}`}>View</Link>
      </td>
      <td>
        <Link to={`/manage/product/${product.id}`} state={product}>
          Edit
        </Link>
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
