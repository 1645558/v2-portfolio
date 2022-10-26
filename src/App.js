import './App.css';
import Carousel, { CarouselItem } from './Carousel';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  return (
    <>
      <div className='container'>
        <div className='nav'>
          <ul>
            <li>Connor Thompson</li>
            <li>
              <a href='https://github.com/1645558'><GitHubIcon /></a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/connor-thompson-025286237/'><LinkedInIcon /></a>
            </li>
          </ul>
        </div>
        <section className='one'>
          <div className='header'>
            Hi! I'm Connor - Full Stack Developer.
          </div>
          <span className='vertical-line'></span>
        </section>
        <section className='two'>
          <Carousel>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
          </Carousel>
          About
        </section>
        <section className='three'>
          Contact Me
        </section>
      </div>
    </>
  );
}

export default App;
