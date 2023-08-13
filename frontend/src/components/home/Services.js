import { Carousel } from 'react-bootstrap';
import webdev from '../../images/webdev.webp'
import graphicdesigner from '../../images/graphicdesigner.webp'
import placeholder from '../../images/placeholder.webp'
// import martomsStudios from '../../images/main-logo-b.svg'
import martomsStudios from '../../images/main-logo-c.svg'
// import horizontal from '../../images/horizontal.svg'
import horizontal from '../../images/horizontal-white.svg'
import { Link } from 'react-router-dom';


function Services() {
  return (
    <div className='services'>
      <img id='main-logo' className='d-lg-none' src={martomsStudios} alt="martoms studios" />
      <img id='main-logo' className='d-none d-lg-inline-block' src={horizontal} alt="martoms studios" />
      <Carousel className='services' interval={3000} fade>
        <Carousel.Item as={Link} to='/projects/web-development'>
          {
            <img src={webdev} alt="webdev" /> ||
            <img src={placeholder} alt="placeholder" />
          }
          <Carousel.Caption>
            <h3 className='service'>Full Stack<br className='d-lg-none' /> Web Developer</h3>
            <p>View projects</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item as={Link} to='/projects/graphic-design'>
          {
            <img src={graphicdesigner} alt="graphicdesigner" /> ||
            <img src={placeholder} alt="placeholder" />
          }
          <Carousel.Caption>
            <h3 className='service'>Graphic Designer</h3>
            <p>View projects</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Services;