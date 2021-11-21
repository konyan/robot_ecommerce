import React from 'react';
import Card from '../molecules/card.js';

const CardList = ({ dataList }) => {
  return (
    <div className='row justify-content-center'>
      <div className='card-columns'>
        {dataList.map((data) => (
          <Card data={data} key={data.name} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
