import React from 'react';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/action';
import priceFormatter from '../../utils/priceFormatter';
const Card = ({ addItem, data }) => {
  const { name, image, price, stock, material, createdAt } = data;

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
            <span className='price'>{priceFormatter(price)}</span>
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
