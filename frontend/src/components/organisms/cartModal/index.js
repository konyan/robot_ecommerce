import React from 'react';
import './index.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectorCartItems,
  selectCartTotal,
} from '../../../redux/cart/selectors';

import priceFormatter from '../../../utils/priceFormatter';
import CheckoutItem from '../../atoms/cartItem';
import { toggleCartHidden } from '../../../redux/cart/action';

const CartModal = ({ check = false, cartItems, total, toggleCartHidden }) => {
  return (
    <div class='section full-height'>
      <input
        class='modal-btn'
        type='checkbox'
        id='modal-btn'
        name='modal-btn'
        checked={check}
      />

      <div className='modal'>
        <div className='modal-wrap'>
          <div className='checkout-page'>
            <div className='checkout-header'>
              <div className='header-block'>
                <span>Name</span>
              </div>
              <div className='header-block'>
                <span>Quantity</span>
              </div>
              <div className='header-block'>
                <span style={{ textAlign: 'left' }}>Price</span>
              </div>
              <div className='header-block'>
                <span>Amount</span>
              </div>
            </div>
            {cartItems.map((item) => (
              <CheckoutItem cartItem={item} key={item.id} />
            ))}

            <div className='total'>
              <span>TOTAL :{priceFormatter(total)}</span>
            </div>
            <span className='remove-button' onClick={() => toggleCartHidden()}>
              &#10005;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
