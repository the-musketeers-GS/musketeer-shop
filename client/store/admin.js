import axios from 'axios';

//action types
const GET_ALL_USERS = 'GET_ALL_USERS';
const DELETE_USER = 'DELETE_USER';
const TOGGLE_USER = 'TOGGLE_USER';

//action creators
export const requestAllUsers = users => ({
  type: GET_ALL_USERS,
  users
});

export const deleteOneUser = userId => ({
  type: DELETE_USER,
  userId
});

export const toggleOneUser = userId => ({
  type: TOGGLE_USER,
  user: userId
});

//thunks
export const fetchUsers = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/users`);
    dispatch(requestAllUsers(data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = userId => {
  return async dispatch => {
    await axios.delete(`/api/users/${userId}`);
    dispatch(deleteOneUser(userId));
  };
};

export const toggleisAdmin = userId => {
  return async dispatch => {
    await axios.put(`/api/users/${userId}`);
    dispatch(fetchUsers());
  };
};

//reducer
const initialState = {
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.users };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== +action.userId)
      };
    case TOGGLE_USER:
      return { ...state, users: [...state.users, action.user] };
    default:
      return state;
  }
}
