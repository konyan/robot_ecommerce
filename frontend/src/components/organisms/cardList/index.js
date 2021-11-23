import React from 'react';
import Card from '../../molecules/card.js';

const CardList = ({ dataList }) => {
  return (
    <>
      {dataList.map((data) => (
        <Card data={data} key={data.name} />
      ))}
    </>
  );
};

export default CardList;
