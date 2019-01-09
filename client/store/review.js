import axios from 'axios';

//action contstant
const GOT_ONE_PRODUCT_REVIEWS_FROM_SERVER =
  'GOT_ONE_PRODUCT_REVIEWS_FROM_SERVER';

//action type
export const gotOneProductReviewsFromServer = prodReviews => {
  return {
    type: GOT_ONE_PRODUCT_REVIEWS_FROM_SERVER,
    prodReviews: prodReviews
  };
};

//thunk creator
export const fetchReviewsForOneProduct = productId => {
  return async dispatch => {
    const response = await axios.get(`/api/reviews/product/:${productId}`);
    const prodReviews = response.data;
    const action = gotOneProductReviewsFromServer(prodReviews);
    dispatch(action);
  };
};

//reducer

const initialState = {
  allProdReviews: []
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ONE_PRODUCT_REVIEWS_FROM_SERVER:
      return {
        ...state,
        allProdReviews: action.prodReviews
      };
    default:
      return state;
  }
};

export default reviewReducer;
