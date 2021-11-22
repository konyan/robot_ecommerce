import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/icons/cart.svg';
import { connect } from 'react-redux';
import './style.scss';
import { toggleCartHidden } from '../../../redux/cart/action';
import { selectItemCount } from '../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
