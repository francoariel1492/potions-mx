import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel fade className='h-25'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/content/dan-farrell-qayNP9ccw9E-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='display-1'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/content/dino-reichmuth-d6yDSisNi4w-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='display-1'>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/content/dollar-gill-0V7_N62zZcU-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='display-1'>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;