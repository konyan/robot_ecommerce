import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/selectors';

import CartDropdown from '../atoms/cartDropdown/card-dropdown';
import CartIcon from '../atoms/cartIcon';
import SearchInput from '../atoms/searchInput';
import { getFilterItem } from '../../redux/item/action';

const Header = ({ hidden, getFilterItem }) => {
  const [key, setKey] = useState('');

  const onSearchChange = (text) => {
    const keyword = text.toLowerCase();
    getFilterItem(keyword);
    setKey(keyword);
  };

  return (
    <div className='header'>
      <h1 className='header__title'>Robot Market</h1>
      <div className='header__cart'>
        <SearchInput value={key} onChange={onSearchChange} />
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, { getFilterItem })(Header);
