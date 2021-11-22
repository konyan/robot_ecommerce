import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cartItem/index';
import { selectorCartItems } from '../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../../redux/cart/action';
import { useNavigate } from 'react-router-dom';

const CartDropDown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <button
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
