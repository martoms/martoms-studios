import placeholder from '../images/placeholder.webp'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const AboutMe = () => {
    return (
        <div id="about-me">
            <div className='about-me-pic'>
                <img src={placeholder} alt="placeholder" />
            </div>
            <h1>Marjohn Tomatao</h1>
            <div className="titles">
                <h3>Full Stack Web Developer</h3>
                <h3>Graphic Designer</h3>
            </div>
            <p className='about-me-description'>
                I am self-taught as a graphic designer since college and I am currently employed at Father Saturnino Urios University in Butuan City as a Graphic Designer and as a Strategic Communications Staff.<br /><br />I learned computer programming and earned a certificate in Full Stack Web Development at Zuitt Coding Bootcamp from May to August 2023. Moreover, during the said bootcamp, I earned two out of three major awards, namely the Capstones&nbsp;2&nbsp;&&nbsp;3 which showcase my exceptional skills in creating a backend web server and a fullstack web app respectively.<br /><br />I am also open to offer my service as a fulltime web developer.
            </p>
            <hr />
            <div className='cert-btns'>
                <Button as={Link} to='https://share.zertify.zuitt.co/certificate/20315512-5638-4257-bada-4ae0ff6e218a/' target='_blank'>
                    View Certificate
                </Button>
            </div>
            <hr />
            <Contact />
        </div>
    );
}
 
export default AboutMe;