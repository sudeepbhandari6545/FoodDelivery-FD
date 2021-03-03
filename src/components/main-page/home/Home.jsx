import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './home.css';

const Home = () => {
  const textsize = {
    fontSize: 60,
  };
  return (
    <div className="home">
      <Container>
        {/* home main div */}
        <div className="home-main-div">
          <Row>
            <Col md={6}>
              {/* home image */}
              <img
                className="animated-image"
                src={process.env.PUBLIC_URL + './image/animated/cycling.gif'}
              />
            </Col>
            <Col sm={12} md={6}>
              <div className="pl-5">
                <h1 className="font-weight-bold text-justify" style={textsize}>
                  Your Favorite <br /> Food, on the <br /> way!
                </h1>
                <p className="text-justify pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur pretium tellus nibh, ac efficitur turpis viverra ac.
                  Pellentesque habitant morbi.
                </p>
                <div className="pt-4">
                  <input
                    className="Email-me"
                    type="text"
                    placeholder="Enter Delivery Address"
                  />
                  <Button className="float-right mr-4" variant="warning">
                    <span>
                      <ArrowForwardIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
