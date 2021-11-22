import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/selectors';

import CartDropdown from '../atoms/cartDropdown/card-dropdown';
import CartIcon from '../atoms/cartIcon';
const Header = ({ hidden }) => {
  return (
    <div className='container mb-5 d-flex justify-content-between'>
      <h1 className='font-weight-bold title'>Robot Market</h1>
      <div className='row' style={{ position: 'relative' }}>
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
