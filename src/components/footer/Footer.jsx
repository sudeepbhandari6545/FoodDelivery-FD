import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './footer.css';

const Footer = () => {
  const playstore = {
    fontSize: 20,
  };
  return (
    <>
      <div className="main-footer">
        <Container>
          <div>
            <Row>
              <Col>
                <div className="pt-5">
                  <h3 className="text-capitalize pt-3 text-white font-weight-bold">
                    FoodD.
                  </h3>
                  <div className="pt-3">
                    <ul>
                      <li>
                        <a href="">home</a>
                      </li>
                      <li>
                        <a href="">about us</a>
                      </li>
                      <li>
                        <a href="">newsroom</a>
                      </li>
                      <li>
                        <a href="">FAQ</a>
                      </li>
                      <li>
                        <a href="">contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="pt-3">
                  <h4 className="pt-5 text-capitalize text-white font-weight-bold">
                    Download the App
                  </h4>
                  <p className="text-white pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                  {/* buttons */}
                  <div className="pt-5">
                    <button className="Appstore-second">
                      <PhoneIphoneIcon
                        className="app-button ml-2"
                        fontSize="medium"
                      />

                      <span className="mr-3 text-capitalize" style={playstore}>
                        App store
                      </span>
                    </button>
                    <button className="Appstore-second ml-5">
                      <PlayArrowIcon
                        className="google-button"
                        fontSize="medium"
                      />

                      <span className=" mr-2" style={playstore}>
                        google play
                      </span>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />

            <Row>
              <Col>
                <div className="pt-5">
                  <FacebookIcon className="m-2" fontSize="large" />
                  <TwitterIcon className="m-2" fontSize="large" />
                  <YouTubeIcon className="m-2" fontSize="large" />
                </div>
              </Col>
              <Col>
                <div>
                  <p className="text-white text-justify pt-5">
                    © 2021 Food Delivery - Your Favorite Food, on the way!
                    Integer rutrum, ante nec hendrerit blandit, neque mauris
                    eleifend odio, nec mollis dolor urna nec neque. Quisque
                    egestas consequat suscipit.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
