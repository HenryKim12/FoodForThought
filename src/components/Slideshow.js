import Carousel from 'react-bootstrap/Carousel';
import Breakfast from "../images/breakfast.jpg";
import Lunch from "../images/lunch.jpg";
import Dinner from "../images/dinner.jpg";

function Slideshow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="slide1"
          src={Breakfast}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Breakfast Recipes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide1"
          src={Lunch}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Lunch Recipes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide1"
          src={Dinner}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dinner Recipes</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;