import Carousel from 'react-bootstrap/Carousel';

import "./Slider.css"

function Slider() {
  return (
    <Carousel fade className='h-25 carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/content/dan-farrell-qayNP9ccw9E-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='display-1 sliderTitle'><span>First</span></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/content/dino-reichmuth-d6yDSisNi4w-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='display-1 sliderTitle'><span>Second</span></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/content/dollar-gill-0V7_N62zZcU-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='display-1 sliderTitle'><span>Third</span></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;