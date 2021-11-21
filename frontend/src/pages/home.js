import React, { useEffect, useState } from 'react';
import CardList from '../components/organisms/cardList';
import Header from '../components/organisms/header';

const Home = () => {
  const [robots, setRobots] = useState([]);

  const fetchRobots = async () => {
    const data = await fetch('/api/robots');
    const response = await data.json();

    setRobots([...response.data]);
  };

  useEffect(() => {
    fetchRobots();
  }, []);

  return (
    <>
      <Header />

      <div className='container-fluid'>
        <CardList dataList={robots} />
      </div>
    </>
  );
};

export default Home;
