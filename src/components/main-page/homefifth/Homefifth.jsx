import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './homefifth.css';

const Homefifth = () => {
  return (
    <>
      <div className="home-fifth">
        <Container>
          <Row>
            <Col>
              <div className="pt-5">
                <img
                  className="icon-image"
                  src={process.env.PUBLIC_URL + './image/small icon/icon.png'}
                />
                <h3 className="text-center text-dark">
                  <a href="" className="text-dark font-weight-bold">
                    Become a partner
                  </a>
                </h3>
                <p className="text-center pt-3 p-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, ante nec hendrerit blandit, neque mauris
                  eleifend odio, nec mollis dolor urna nec neque. Quisque
                  egestas consequat suscipit. Cras condimentum dui vitae laoreet
                  feugiat.
                </p>
                <span className="learn">
                  <a href="" className="font-weight-bold text-capitalize">
                    learn more
                  </a>
                </span>
              </div>
            </Col>
            <Col>
              <div className="pt-5">
                <img
                  className="icon-image"
                  src={process.env.PUBLIC_URL + './image/small icon/icon2.png'}
                />
                <h3 className="text-center text-dark">
                  <a href="" className="text-dark font-weight-bold">
                    Become a Courier
                  </a>
                </h3>
                <p className="text-center pt-3 p-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, ante nec hendrerit blandit, neque mauris
                  eleifend odio, nec mollis dolor urna nec neque. Quisque
                  egestas consequat suscipit. Cras condimentum dui vitae laoreet
                  feugiat.
                </p>
                <span className="learn">
                  <a href="" className="font-weight-bold text-capitalize">
                    learn more
                  </a>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homefifth;
