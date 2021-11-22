import React from 'react';
import './index.styles.scss';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../../redux/cart/action';
import priceFormatter from '../../../utils/priceFormatter';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{priceFormatter(price)}</span>
      <span className='amount'>{priceFormatter(price * quantity)}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
