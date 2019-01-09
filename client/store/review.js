import axios from 'axios';

//action contstant
const GOT_ONE_PROJECT_REVIEWS_FROM_SERVER =
  'GOT_ONE_PROJECT_REVIEWS_FROM_SERVER';

//action type
export const gotOneProjectReviewsFromServer = projReviews => {
  return {
    type: GOT_ONE_PROJECT_REVIEWS_FROM_SERVER,
    projReviews: projReviews
  };
};

//thunk creator
export const fetchReviewsForOneProject = projectId => {
  return async dispatch => {
    const response = await axios.get(`/api/reviews/product/${projectId}`);
    const projReviews = response.data;
    const action = gotOneProjectReviewsFromServer(projReviews);
    dispatch(action);
  };
};

//reducer

const initialState = {
  allProjReviews: []
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ONE_PROJECT_REVIEWS_FROM_SERVER:
      return {
        ...state,
        allProjReviews: action.projReviews
      };
    default:
      return state;
  }
};

export default reviewReducer;
