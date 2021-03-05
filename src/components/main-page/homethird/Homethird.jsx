import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './homethird.css';

const Homethird = () => {
  const textsize = {
    fontSize: 60,
  };
  const mystyle = {
    border: '1px solid orange',
  };
  return (
    <>
      <div>
        <hr />
        <Container>
          <div className="pb-5">
            <h1
              className="pt-5 font-weight-bold text-center text-capitalize"
              style={textsize}
            >
              The Best Restaurants
              <br /> in Your Area
            </h1>
            <p className="text-center pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
          {/* first row */}
          <Row>
            {/* first column */}
            <Col md={4}>
              <div className="third-card">
                <Card className="Card-third" style={{ width: '22rem' }}>
                  <Card.Img
                    className="p-3"
                    variant="center"
                    src={process.env.PUBLIC_URL + './image/card/img1.jpg'}
                  />
                  <Card.Body>
                    <Card.Title className="font-weight-bold">
                      The Fable Bistro
                    </Card.Title>
                    <Card.Text className="pt-3">
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                  <p className="font-weight-bold pl-3 pt-3">
                    $0.00 - Delivery Fee
                  </p>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <Card className="Card-third" style={{ width: '22rem' }}>
                  <Card.Img
                    className="p-3"
                    variant="center"
                    src={process.env.PUBLIC_URL + './image/card/img2.jpg'}
                  />
                  <Card.Body>
                    <Card.Title className="font-weight-bold">
                      The Corner Fox
                    </Card.Title>
                    <Card.Text className="pt-3">
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                  <p className="font-weight-bold pl-3 pt-3">
                    $0.00 - Delivery Fee
                  </p>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <Card className="Card-third" style={{ width: '22rem' }}>
                  <Card.Img
                    className="p-3"
                    variant="center"
                    src={process.env.PUBLIC_URL + './image/card/img3.jpg'}
                  />
                  <Card.Body>
                    <Card.Title className="font-weight-bold">
                      The Pearl Apple
                    </Card.Title>
                    <Card.Text className="pt-3">
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur adipiscing elit.
                    </Card.Text>
                  </Card.Body>
                  <p className="font-weight-bold pl-3 pt-3">
                    $0.00 - Delivery Fee
                  </p>
                </Card>
              </div>
            </Col>
          </Row>
          {/* second row */}
          <div className="pt-5">
            <Row>
              <Col md={4}>
                <div>
                  <Card className="Card-third" style={{ width: '22rem' }}>
                    <Card.Img
                      className="p-3"
                      variant="center"
                      src={process.env.PUBLIC_URL + './image/card/img4.jpg'}
                    />
                    <Card.Body>
                      <Card.Title className="font-weight-bold">
                        The Village Stranger
                      </Card.Title>
                      <Card.Text className="pt-3">
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit.
                      </Card.Text>
                    </Card.Body>
                    <p className="font-weight-bold pl-3 pt-3">
                      $0.00 - Delivery Fee
                    </p>
                  </Card>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <Card className="Card-third" style={{ width: '22rem' }}>
                    <Card.Img
                      className="p-3"
                      variant="center"
                      src={process.env.PUBLIC_URL + './image/card/img5.jpg'}
                    />
                    <Card.Body>
                      <Card.Title className="font-weight-bold">
                        The Scarf
                      </Card.Title>
                      <Card.Text className="pt-3">
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit.
                      </Card.Text>
                    </Card.Body>
                    <p className="font-weight-bold pl-3 pt-3">
                      $0.00 - Delivery Fee
                    </p>
                  </Card>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <Card className="Card-third" style={{ width: '22rem' }}>
                    <Card.Img
                      className="p-3"
                      variant="center"
                      src={process.env.PUBLIC_URL + './image/card/img6.jpg'}
                    />
                    <Card.Body>
                      <Card.Title className="font-weight-bold">
                        Bambino
                      </Card.Title>
                      <Card.Text className="pt-3">
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit.
                      </Card.Text>
                    </Card.Body>
                    <p className="font-weight-bold pl-3 pt-3">
                      $0.00 - Delivery Fee
                    </p>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Homethird;
