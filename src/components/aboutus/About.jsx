import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './about.css';

const About = () => {
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
    </>
  );
};

export default About;
