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
      <h3>Welcome, {email}</h3>
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
