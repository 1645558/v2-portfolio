import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';

const images = ['https://i.imgur.com/4sK81Mq.png',
    'https://i.imgur.com/IuuFucy.png',
    'https://i.imgur.com/PrVOlUX.png'
];

function Comp() {
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
        </Carousel.Slide>
    ));

    return (
        <section className='two' >
            <Carousel
                sx={{ maxWidth: '70%' }}
                mx='auto'
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {slides}
            </Carousel>
        </section>
    )
};

export default Comp;