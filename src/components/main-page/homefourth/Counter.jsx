import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Countup from 'react-countup';
import './counter.css';

const Counter = () => {
  const textsize = {
    fontSize: 50,
  };
  const countersize = {
    fontSize: 85,
  };
  return (
    <>
      <div className="">
        <Container>
          <div className="pt-5">
            <h1
              className="pt-5 font-weight-bold text-center text-capitalize"
              style={textsize}
            >
              Get to Know Us
            </h1>
            <p className="text-center pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
          <div className="pt-5">
            <Row>
              <Col>
                <div className="counter-div">
                  <h1 className="font-weight-bold counter" style={countersize}>
                    <span style={{ color: ' #f94335 ' }}>
                      <Countup end={650} />
                      K+
                    </span>
                  </h1>
                  <p className="pl-5">Users Order Online</p>
                </div>
              </Col>
              <Col>
                <div className="counter-div">
                  <h1
                    className="font-weight-bold text-center"
                    style={countersize}
                  >
                    <span style={{ color: ' #35adf9 ' }}>
                      <Countup end={85} />
                    </span>
                  </h1>
                  <p className="text-center">Cities & Even More on the Way</p>
                </div>
              </Col>
              <Col>
                <div>
                  <h1
                    className="font-weight-bold text-center"
                    style={countersize}
                  >
                    <span style={{ color: ' #db2719 ' }}>
                      <Countup end={8000} />+
                    </span>
                  </h1>
                  <p className="text-center">Merchants Grow Their Businesses</p>
                </div>
              </Col>
            </Row>
          </div>
          <hr />
        </Container>
      </div>
    </>
  );
};

export default Counter;
