import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth, checkLocalStorage } from '../store';

/**
 * COMPONENT
 */
const SignUpForm = props => {
  const { displayName, handleSubmit, error } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name="signup">
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="test" />
        </div>
        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="addressOne">
            <small>Address One</small>
          </label>
          <input name="addressOne" type="text" />
        </div>
        <div>
          <label htmlFor="addressTwo">
            <small>Address Two</small>
          </label>
          <input name="addressTwo" type="text" />
        </div>
        <div>
          <label htmlFor="city">
            <small>City</small>
          </label>
          <input name="city" type="text" />
        </div>
        <div>
          <label htmlFor="state">
            <small>State</small>
          </label>
          <input name="state" type="text" />
        </div>
        <div>
          <label htmlFor="zipCode">
            <small>Zip Code</small>
          </label>
          <input name="zipCode" type="text" />
        </div>
        <div>
          <label htmlFor="phone">
            <small>Phone - format(0123456789)</small>
          </label>
          <input name="phone" type="text" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const addr1 = evt.target.addressOne.value;
      const addr2 = evt.target.addressTwo.value;
      const city = evt.target.city.value;
      const state = evt.target.state.value;
      const zipCode = evt.target.zipCode.value;
      const phone = evt.target.phone.value;
      dispatch(
        auth(
          email,
          password,
          formName,
          firstName,
          lastName,
          addr1,
          addr2,
          city,
          state,
          zipCode,
          phone
        )
      );
      dispatch(checkLocalStorage());
    }
  };
};

export const Signup = connect(mapSignup, mapDispatch)(SignUpForm);

/**
 * PROP TYPES
 */
SignUpForm.propTypes = {
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
