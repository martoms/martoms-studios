import { Carousel } from 'react-bootstrap';
import placeholder from '../../images/placeholder.webp'
import martomsStudios from '../../images/main-logo-b.svg'
import horizontal from '../../images/horizontal.svg'


function Services() {
  return (
    <div className='services'>
      <img id='main-logo' className='d-lg-none' src={martomsStudios} alt="martoms studios" />
      <img id='main-logo' className='d-none d-lg-inline-block' src={horizontal} alt="martoms studios" />
      <Carousel className='services' interval={3000} fade>
        <Carousel.Item>
          <img src={placeholder} alt="placeholder" />
          <Carousel.Caption>
            <h3>Full Stack<br className='d-lg-none' /> Web Developer</h3>
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