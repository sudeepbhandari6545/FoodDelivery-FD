import React from 'react';

import Slider from 'react-slick';
import { Container, Col } from 'react-bootstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Aboutcomponent = () => {
  const settings = {
    speed: 800,
    autoPlay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className=""
            src={process.env.PUBLIC_URL + './image/slider/slide.png'}
          />
        </div>
        <div>
          <img
            className=""
            src={process.env.PUBLIC_URL + './image/slider/slide1.png'}
          />
        </div>
        <div>
          <img
            className=""
            src={process.env.PUBLIC_URL + './image/slider/slide2.png'}
          />
        </div>
        <div>
          <img
            className=""
            src={process.env.PUBLIC_URL + './image/slider/slide3.png'}
          />
        </div>
        <div>
          <img
            className=""
            src={process.env.PUBLIC_URL + './image/slider/slide.png'}
          />
        </div>
        <div>
          <img
            className=""
            src={process.env.PUBLIC_URL + './image/slider/slide1.png'}
          />
        </div>
      </Slider>
    </div>
    // <>
    //   <Container>
    //     <Slider {...settings}>
    //       <Col>
    //         <img
    //           className=""
    //           src={process.env.PUBLIC_URL + './image/slider/slide.png'}
    //         />
    //         <img
    //           className=""
    //           src={process.env.PUBLIC_URL + './image/slider/slide.png'}
    //         />
    //         <img
    //           className=""
    //           src={process.env.PUBLIC_URL + './image/slider/slide.png'}
    //         />
    //         <img
    //           className=""
    //           src={process.env.PUBLIC_URL + './image/slider/slide.png'}
    //         />
    //         <img
    //           className=""
    //           src={process.env.PUBLIC_URL + './image/slider/slide.png'}
    //         />
    //       </Col>
    //     </Slider>
    //   </Container>
    // </>
  );
};

export default Aboutcomponent;
