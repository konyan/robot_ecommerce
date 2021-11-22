import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/selectors';

import CartDropdown from '../atoms/cartDropdown/card-dropdown';
import CartIcon from '../atoms/cartIcon';
const Header = ({ hidden }) => {
  return (
    <div className='header'>
      <h1 className='header__title'>Robot Market</h1>
      <div className='header__cart'>
        <input
          placeholder='enter search keyword'
          className='header__cart-search'
        />
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(Header);
