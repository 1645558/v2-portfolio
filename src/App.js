import React, { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import Carousel from './Carousel';
import Contact from './Contact';
import Landing from './Landing';
import Header from './Header';
import './App.css';

function App() {

  

  return (
    <>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className='container'>
        <Header />
        <Landing />
        <Carousel />
        <Contact />
      </div>
      </MantineProvider>
    </>
  );
}

export default App;
