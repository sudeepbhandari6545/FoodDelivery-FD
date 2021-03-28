import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Countup from 'react-countup';
import './about.css';

const About = () => {
  const countersize = {
    fontSize: 60,
  };
  return (
    <>
      <div className="about-main">
        <Container>
          <Row className="">
            <div className="my-video">
              <ReactPlayer
                className="reactplayer"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                loop={true}
                playing={true}
                style={{ width: '1100px', height: '600' }}
              />
            </div>
          </Row>
        </Container>
      </div>
      {/* about us */}
      <div className="about-second">
        <Container>
          <Row>
            <Col>
              <div className="pt-5">
                <h1 className="font-weight-bold text-capitalize pt-5">
                  about us
                </h1>
                <p className="">
                  FoodD is on a Mission to <br /> Transform the Way <br />
                  Customers Eat
                </p>
              </div>
            </Col>
            <Col>
              <div className="pt-5">
                <p className="pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pharetra metus metus, vitae consequat justo facilisis at. Nunc
                  vestibulum augue iaculis augue bibendum iaculis. Integer
                  sollicitudin laoreet sapien et vehicula. <br /> <br /> Cras id
                  accumsan lacus. Morbi mollis metus vitae felis suscipit, in
                  venenatis risus rutrum. Maecenas consequat hendrerit lorem vel
                  efficitur.
                </p>
                <h2 className="font-weight-bold text-capitalize pt-5">
                  our mission
                </h2>
                <p className="pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pharetra metus metus, vitae consequat justo facilisis at. Nunc
                  vestibulum augue iaculis augue bibendum iaculis. Integer
                  sollicitudin laoreet sapien et vehicula. Cras id accumsan
                  lacus. Morbi mollis metus vitae felis suscipit, in venenatis
                  risus rutrum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* about third */}
      <div className="about-third">
        <Container>
          <Row>
            <Col>
              <div className="pt-5">
                <img
                  className="counter-image"
                  src={
                    process.env.PUBLIC_URL +
                    './image/background/counter-background.jpg'
                  }
                />
              </div>
            </Col>
            {/* counter start */}
            <Col>
              <div className="pt-5">
                <Row>
                  <div className="my-row">
                    <div className="about-counter text-white text-center">
                      <h1 className="font-weight-bold pt-5" style={countersize}>
                        <span style={{ color: ' #FDFEFE' }}>
                          <Countup end={650} />
                          K+
                        </span>
                      </h1>
                      <p className="font-weight-bold">Users Order Online</p>
                    </div>
                    <div className="about-counter-second text-white">
                      <h1
                        className="font-weight-bold text-center pt-5"
                        style={countersize}
                      >
                        <span style={{ color: ' #FDFEFE ' }}>
                          <Countup end={85} />
                        </span>
                      </h1>
                      <p className="text-center font-weight-bold">Cities</p>
                    </div>
                    <div className="about-counter-third text-white">
                      <h1
                        className="font-weight-bold text-center pt-5"
                        style={countersize}
                      >
                        <span style={{ color: '#FDFEFE ' }}>
                          <Countup end={8000} />+
                        </span>
                      </h1>
                      <p className="text-center font-weight-bold">
                        Merchants Grow Their Businesses
                      </p>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* about gallery image */}
      <div className="about-gallery">
        <Container>
          <Row>
            <Col md={4}>
              <div>
                <img
                  className="aboutimage"
                  src={
                    process.env.PUBLIC_URL + './image/about-image/about-img.jpg'
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img
                  className="aboutimage"
                  src={
                    process.env.PUBLIC_URL +
                    './image/about-image/about-img1.jpg'
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img
                  className="aboutimage"
                  src={
                    process.env.PUBLIC_URL +
                    './image/about-image/about-img2.jpg'
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img
                  className="aboutimage"
                  src={
                    process.env.PUBLIC_URL +
                    './image/about-image/about-img3.jpg'
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img
                  className="aboutimage"
                  src={
                    process.env.PUBLIC_URL +
                    './image/about-image/about-img4.jpg'
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img
                  className="aboutimage"
                  src={
                    process.env.PUBLIC_URL +
                    './image/about-image/about-img5.jpg'
                  }
                />
              </div>
            </Col>
            {/* third row */}
            <Col md={4}>
              <div>
                <img
                  className="aboutimage"
                  src={
                    process.env.PUBLIC_URL +
                    './image/about-image/about-img6.jpg'
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img
                  className="aboutimage"
                  src={
                    process.env.PUBLIC_URL +
                    './image/about-image/about-img7.jpg'
                  }
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* about fourth part */}
      <div>
        <Container>
          <Row>
            <Col>
              <div className="p-4">
                <h4 className="font-weight-bold">
                  Our Qoal is to Offer You Food of the <br /> Best Quality and
                  Taste
                </h4>
                <p>
                  Morbi felis sapien, tempor sit amet eleifend eget, dignissim
                  non tellus. Ut ut tempor est. Etiam ullamcorper libero sed
                  turpis tempus ultrices eget in enim. Morbi tellus mauris,
                  lobortis id tellus nec, ultrices iaculis lectus. Phasellus
                  eget leo eu turpis vulputate scelerisque eu lobortis eros.
                  Nulla facilisi. Etiam finibus leo purus, ac vehicula justo
                  sagittis eget.
                </p>
                <p>
                  Integer orci nibh, cursus ac nunc et, mattis ullamcorper
                  massa. Donec ac sapien turpis. Nulla facilisi. Praesent ut leo
                  pretium, fermentum ante a, pellentesque ligula. Nunc
                  facilisis, tellus facilisis ornare tristique, libero felis
                  rutrum urna, accumsan interdum nibh arcu eget urna. In hac
                  habitasse platea dictumst. Phasellus scelerisque ut nunc vel
                  maximus
                </p>
                <p>
                  Nunc facilisis, tellus facilisis ornare tristique, libero
                  felis rutrum urna, accumsan interdum nibh arcu eget urna
                </p>
              </div>
            </Col>
            <Col>
              <div className="p-4">
                <div>
                  <h4 className="font-weight-bold">Quality Food</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
                <hr />
                <div>
                  <h4 className="font-weight-bold">Fast Delivery</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
                <hr />
                <div>
                  <h4 className="font-weight-bold">Affordable Prices</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <Container>
            <div>
              <h1 className="text-capitalize text-center font-weight-bold">
                Our Investors
              </h1>
              <Row>
                <div>
                  <img
                    className=""
                    src={process.env.PUBLIC_URL + './image/slider/slide.png'}
                  />
                  <img
                    className=""
                    src={process.env.PUBLIC_URL + './image/slider/slide.png'}
                  />
                  <img
                    className=""
                    src={process.env.PUBLIC_URL + './image/slider/slide.png'}
                  />
                  <img
                    className=""
                    src={process.env.PUBLIC_URL + './image/slider/slide.png'}
                  />
                  <img
                    className=""
                    src={process.env.PUBLIC_URL + './image/slider/slide.png'}
                  />
                  <img
                    className=""
                    src={process.env.PUBLIC_URL + './image/slider/slide.png'}
                  />
                </div>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default About;
