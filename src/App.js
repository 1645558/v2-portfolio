import './App.css';
import Carousel, { CarouselItem } from './Carousel';

function App() {
  return (
    <>
      <div className='container'>
        <div className='nav'>
          <ul>
            <li>Connor Thompson</li>
            <li>Github</li>
            <li>LinkedIn</li>
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
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 1</CarouselItem>
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
