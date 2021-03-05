import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Countup from 'react-countup';
import RoomIcon from '@material-ui/icons/Room';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './counter.css';

const Counter = () => {
  const textsize = {
    fontSize: 50,
  };
  const countersize = {
    fontSize: 85,
  };
  const counterp = {
    fontSize: 12,
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
          {/* location area */}
          <div className="pt-5">
            <div className="pt-5 pb-5">
              <h3 className="font-weight-bold text-center">
                Food Delivery, Areas We Currently Serve
              </h3>
            </div>
            <Row>
              <Col>
                <div className="location">
                  <ul>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          agoura hills
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          alhambra
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          arcadia
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          artesia
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          avalon
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* second column */}
              <Col>
                <div className="location">
                  <ul>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          baldwin park
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          bell
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          bell gardens
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          bellflower
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          beverly hills
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* third coloumn */}
              <Col>
                <div className="location">
                  <ul>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          burbank
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          calabasas
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          carson
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          cerritos
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          commerce
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* fourth coloumn */}
              <Col>
                <div className="location">
                  <ul>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          compton
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          covina
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          cudahy
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          culver city
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          daimond bar
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* fifth coloumn */}
              <Col>
                <div className="location">
                  <ul>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          duarte
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          ei monte
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          ei segundo
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          gardena
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <RoomIcon />
                        <span className="pl-3 text-capitalize text-dark">
                          glendale
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          {/* email section */}

          <div className="counter-email">
            <input
              className="email-counter"
              type="text"
              placeholder="Enter Delivery Address"
            />
            <Button className="ml-4" variant="warning">
              <span>
                <ArrowForwardIcon />
              </span>
            </Button>
          </div>
          <p className="text-center p-3" style={counterp}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            rutrum, ante nec hendrerit blandit, neque mauris <br /> eleifend
            odio, nec mollis dolor urna nec neque. Quisque egestas consequat
            suscipit
          </p>
        </Container>
      </div>
    </>
  );
};

export default Counter;
