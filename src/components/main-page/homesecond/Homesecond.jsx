import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './homesecond.css';

const Homesecond = () => {
  const textsize = {
    fontSize: 55,
  };
  const playstore = {
    fontSize: 24,
  };
  return (
    <div className="home-second">
      <Container>
        <Row>
          <Col>
            <div className="second-div">
              <h1 className="font-weight-bold text-justify" style={textsize}>
                Find Favorites <br /> and Discover <br /> New Ones
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                rutrum, ante nec hendrerit blandit, neque mauris eleifend odio,
                nec mollis dolor urna nec neque.
              </p>
              <h2 className="font-weight-bold pt-5">
                Download the App and Place
                <br />
                Your Order
              </h2>
              <div className="pt-5">
                <button className="Appstore ">
                  <PhoneIphoneIcon className="app-button" fontSize="large" />

                  <span className="mt-2" style={playstore}>
                    App store
                  </span>
                </button>
                <button className="Appstore2 ml-3">
                  <PlayArrowIcon className="google-button" fontSize="large" />

                  <span className="mt-2" style={playstore}>
                    google play
                  </span>
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <Row>
              <div>
                <img
                  className="homesecond-image"
                  alt="image"
                  src={process.env.PUBLIC_URL + './image/background/app.png'}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homesecond;
