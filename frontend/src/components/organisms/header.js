import React from 'react';

const Header = () => {
  return (
    <div className='container mb-4'>
      <h1 className='font-weight-bold title'>Robot Market</h1>
      <div className='row'>
        <nav className='navbar navbar-expand-lg navbar-light bg-white pl-2 pr-2'>
          <button
            className='navbar-light navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarsExplore'
            aria-controls='navbarsDefault'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarsExplore'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Lifestyle
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Food
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Travel
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
