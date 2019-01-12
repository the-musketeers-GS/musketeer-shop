import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteThunkProduct } from '../store';

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
        <Link to={`/manage/product/${product.id}`}>Edit</Link>
      </td>
      <td>
        <button type="submit" onClick={e => handleDelete(e, product)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageProductList;
