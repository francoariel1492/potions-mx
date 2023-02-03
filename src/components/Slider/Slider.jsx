import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
const carouselFolder = [
  "/carousel/carousel.png",
  "/carousel/carousel2.png",
  "/carousel/carousel3.png",
  "/carousel/carousel4.png",
  "/carousel/carousel5.png"
];

function Slider() {
  return (
    <Carousel fade className="h-25 carousel">
      {carouselFolder.map((id, pos) => (
        <Carousel.Item key={pos}>
        <img
          className="d-block w-100"
          src={id}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="display-1 sliderTitle">
            <span>ALKHIMAQUIA</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>))}
    </Carousel>
  );
}

export default Slider;


/* /* <Carousel.Item>
            <img
              className="ukiyo d-block w-100 thumbnail"
              src="/content/dan-farrell-qayNP9ccw9E-unsplash.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="display-1 sliderTitle">
                <span>First</span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 thumbnail"
              src="/content/dino-reichmuth-d6yDSisNi4w-unsplash.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="display-1 sliderTitle">
                <span>Second</span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 thumbnail"
              src="/content/dollar-gill-0V7_N62zZcU-unsplash.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="display-1 sliderTitle">
                <span>Third</span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item> */