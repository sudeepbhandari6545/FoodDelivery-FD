import React from 'react';
import Navbarcom from './components/Header/Navbarcom';
import Home from './components/main-page/home/Home';
import Homesecond from './components/main-page/homesecond/Homesecond';
import Homethird from './components/main-page/homethird/Homethird';
import Counter from './components/main-page/homefourth/Counter';

const App = () => {
  return (
    <>
      <Navbarcom />
      <Home />
      <Homesecond />
      <Homethird />
      <Counter />
    </>
  );
};

export default App;
