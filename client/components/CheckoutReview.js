import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import formatMoney from '../../lib/formatMoney';
import calcTotalPrice from '../../lib/calcTotalPrice';

const formatShipping = info =>
  `${info.address1} ${info.address2}, ${info.city}, ${info.state}, ${
    info.zip
  }, ${info.country}`;

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: '700'
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

function Review(props) {
  const { classes, products, orderInfo } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.id}>
            <ListItemText
              primary={product.product.title}
              secondary={`Qty: ${product.quantity}`}
            />
            <Typography variant="body2">
              {formatMoney(product.quantity * product.product.price)}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem} key={1}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2">Free</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {formatMoney(calcTotalPrice(products))}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping Info
          </Typography>
          <Typography gutterBottom>
            {orderInfo.firstName} {orderInfo.lastName}
          </Typography>
          <Typography gutterBottom>{formatShipping(orderInfo)}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapState = state => ({
  orderInfo: state.order.shippingInfo,
  products: state.cart.products
});

const ConnectedReview = connect(mapState)(Review);

export default withStyles(styles)(ConnectedReview);
