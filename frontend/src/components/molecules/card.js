import React from 'react';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/action';

const Card = ({ addItem, data }) => {
  const { name, image, price, stock, material, createdAt } = data;

  var formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <h3>{name}</h3>
        <p className='material'>{material}</p>
        <p className='stock'>{stock} in stocks</p>
        <span>{dayjs(createdAt).format('DD-MM-YYYY')}</span>
        <div className='control'>
          <button
            className='btn'
            type='button'
            disabled={stock <= 0}
            onClick={() => addItem(data)}
          >
            <span className='price'>{formatter.format(price)}</span>
            <span className='buy'>Get now</span>
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Card);
