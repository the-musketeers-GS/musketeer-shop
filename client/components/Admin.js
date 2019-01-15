import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../store';

class Admin extends React.Component {
  handleUserDelete = userId => {
    this.props.deleteUser(userId);
  };
  render() {
    const users = this.props.users.users;
    return (
      <div>
        <h1>Admin page</h1>
        <h3>Edit/Delete Users</h3>
        {!users || users.length === 0 ? (
          <div>There are no users</div>
        ) : (
          users.map(user => (
            <div key={user.id}>
              {user.email}{' '}
              <button
                type="button"
                onClick={() => this.handleUserDelete(user.id)}
              >
                x
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
    deleteUser: userId => dispatch(deleteUser(userId))
  };
};

const ConnectedAdmin = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default ConnectedAdmin;
