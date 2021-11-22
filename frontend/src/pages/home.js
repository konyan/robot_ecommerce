import React, { useEffect, useState } from 'react';
import CardList from '../components/organisms/cardList';
import Header from '../components/organisms/header';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectorItems } from '../redux/item/selector';
import { getAllItem } from '../redux/item/action';
import CartModal from '../components/organisms/cartModal';

const Home = ({ items, getAllItem }) => {
  useEffect(() => {
    getAllItem();
  }, []);

  return (
    <>
      <Header />

      <div className='card__container'>
        {items.length > 0 && <CardList dataList={items} />}
      </div>

      <CartModal />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectorItems,
});

export default connect(mapStateToProps, { getAllItem })(Home);
