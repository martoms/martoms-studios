import { Carousel } from 'react-bootstrap';
import placeholder from '../images/placeholder.webp'
import martomsStudios from '../images/main-logo-b.svg'


function Services() {
  return (
    <div className='services'>
      <img id='main-logo' src={martomsStudios} alt="martoms studios" />
      <Carousel className='services' interval={3000} fade>
        <Carousel.Item>
          <img src={placeholder} alt="placeholder" />
          <Carousel.Caption>
            <h3>Full Stack<br />Web Developer</h3>
            <p>View projects</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={placeholder} alt="placeholder" />
          <Carousel.Caption>
            <h3>Graphic Designer</h3>
            <p>View projects</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Services;