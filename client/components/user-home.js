import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {
    email,
    firstName,
    lastName,
    addr1,
    addr2,
    city,
    state,
    zipCode,
    phone
  } = props;

  return (
    <div>
      <h3>
        Welcome, {firstName} {lastName}
      </h3>
      <div>
        <div>Address: </div>
        <div>{addr1}</div>
        <div>{addr2}</div>
        <div>
          {city}, {state} {zipCode}
        </div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    addr1: state.user.addr1,
    addr2: state.user.addr2,
    city: state.user.city,
    state: state.user.state,
    zipCode: state.user.zipCode,
    phone: state.user.phone
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
