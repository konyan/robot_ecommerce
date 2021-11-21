import React from 'react';
import dayjs from 'dayjs';
const Card = ({ data: { name, image, price, stock, material, createdAt } }) => {
  return (
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <h3>{name}</h3>
        <p className='material'>{material}</p>
        <p className='stock'>{stock} in stocks</p>
        <span>{dayjs(createdAt).format('DD-MM-YYYY')}</span>
        <div class='control'>
          <button class='btn' type='button' disabled={stock <= 0}>
            <span class='price'>{price}</span>
            <span class='buy'>Get now</span>
          </button>
        </div>{' '}
      </figcaption>
    </figure>
  );
};
export default Card;
