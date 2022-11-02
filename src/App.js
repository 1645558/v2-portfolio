import React, { useEffect } from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import Carousel from './Carousel';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SouthIcon from '@mui/icons-material/South';
import Headshot from './images/IMG_1965.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  React.useEffect(() => {
    window.addEventListener('load', function() { AOS.init(); });
  })

  return (
    <>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className='container'>
        <div className='nav'>
          <ul>
            <li data-aos='fade-right' data-aos-duration='2000'>Connor Thompson</li>
            <li data-aos='fade-left' data-aos-duration='2000'>
              <a href='https://github.com/1645558'><GitHubIcon /></a>
            </li>
            <li data-aos='fade-left' data-aos-duration='2000'>
              <a href='https://www.linkedin.com/in/connor-thompson-025286237/'><LinkedInIcon /></a>
            </li>
          </ul>
        </div>
        <section className='one'>
          <div className='header' data-aos='fade-up' data-aos-duration='2000'>
            Hey! I'm Connor
          </div>
          <div className='header-2' data-aos='fade-up' data-aos-duration='2000'>
            I'm a Full Stack Developer.
          </div>
          <div className='header-3' >
            Sroll to see my work
            <SouthIcon />
          </div>
          <span className='vertical-line'></span>
        </section>
        <section className='two' >
          <Carousel />
        </section>
        <section className='three'>
        <img src={Headshot} alt='headshot' />
        <div className='zzz' data-aos='flip' data-aos-duration='2000'>
          Contact Me
        </div>
        </section>
      </div>
      </MantineProvider>
    </>
  );
}

export default App;
