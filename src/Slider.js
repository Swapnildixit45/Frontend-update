import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import HomeFirst from "./Images/HomeFirst.svg"
import HomeSecond from "./Images/Brown.svg"
import HomeThird from "./Images/Contact.svg"
import HomeFourth from "./Images/BW.svg"

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={HomeFirst}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={HomeSecond}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={HomeThird}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={HomeFourth}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;