import React from 'react';
import Navbarcom from './components/Header/Navbarcom';
import Home from './components/main-page/home/Home';
import Homesecond from './components/main-page/homesecond/Homesecond';
import Homethird from './components/main-page/homethird/Homethird';
import Counter from './components/main-page/homefourth/Counter';
import Homefifth from './components/main-page/homefifth/Homefifth';
import Footer from './components/footer/Footer';
import About from './components/aboutus/About';

const App = () => {
  return (
    <>
      <Navbarcom />
      <About />
      {/* <Home />
      <Homesecond />
      <Homethird />
      <Counter />
      <Homefifth /> */}
      <Footer />
    </>
  );
};

export default App;
