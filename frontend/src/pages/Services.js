import { Carousel } from 'react-bootstrap';

function Services() {
  return (
    <Carousel className='services' interval={3000} fade>
      <Carousel.Item>
        <img src="/images/placeholder.webp" alt="placeholder" />
        <Carousel.Caption>
          <h3>Full Stack<br />Web Developer</h3>
          <p>View projects</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/placeholder.webp" alt="placeholder" />
        <Carousel.Caption>
          <h3>Graphic Designer</h3>
          <p>View projects</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Services;