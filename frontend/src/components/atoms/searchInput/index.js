import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      placeholder='search by name and material type'
      className='header__cart-search'
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};
export default SearchInput;
