import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, fetchUsers, toggleisAdmin } from '../store';

class Admin extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  handleUserDelete = userId => {
    this.props.deleteUser(userId);
  };

  handleToggleisAdmin = userId => {
    this.props.toggleisAdmin(userId);
  };
  render() {
    const users = this.props.users.users;
    return (
      <div>
        <h1>Admin page</h1>
        <h3>Edit/Delete Users</h3>
        {!users ? (
          <div>There are no users</div>
        ) : (
          users.map(user => (
            <div key={user.id}>
              {user.email}{' '}
              <button
                type="button"
                onClick={() => this.handleUserDelete(user.id)}
              >
                &times;
              </button>
              <button
                type="button"
                onClick={() => this.handleToggleisAdmin(user.id)}
              >
                {user.isAdmin ? 'true' : 'false'}
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: userId => dispatch(deleteUser(userId)),
    toggleisAdmin: userId => dispatch(toggleisAdmin(userId)),
    getUsers: () => dispatch(fetchUsers())
  };
};

const ConnectedAdmin = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default ConnectedAdmin;
