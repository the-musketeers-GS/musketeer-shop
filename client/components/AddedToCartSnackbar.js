import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { toggleSnackbar } from '../store/cart';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SimpleSnackbar extends React.Component {
  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          style={{
            fontSize: '15px'
          }}
          open={this.props.open}
          autoHideDuration={3000}
          onClose={this.props.toggle}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Added to cart! 😉</span>}
        />
      </div>
    );
  }
}

const mapState = state => ({
  open: state.cart.snackbarOpen
});

const mapDispatch = dispatch => ({
  toggle: () => dispatch(toggleSnackbar())
});

const ConnectedSimpleSnackbar = connect(mapState, mapDispatch)(SimpleSnackbar);
export default withStyles(styles)(ConnectedSimpleSnackbar);
