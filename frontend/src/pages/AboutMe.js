import profilepic from '../images/profilepic.webp'
import placeholder from '../images/placeholder.webp'
import { Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const AboutMe = () => {
    return (
        <div id="about-me">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
            <div className='about-me-content'>
                <div className='about-me-pic'>
                    {
                        <img src={profilepic} alt="profilepic" /> ||
                        <img src={placeholder} alt="placeholder" />
                    }
                    <div className='d-none d-lg-block'>
                        <hr />
                        <div className='cert-btns'>
                            <Button as={Link} to='https://share.zertify.zuitt.co/certificate/20315512-5638-4257-bada-4ae0ff6e218a/' target='_blank'>
                                View Certificate
                            </Button>
                            <Button as={Link} to='/about/best-in-capstone-2'>
                                Best in Capstone 2
                            </Button>
                            <Button as={Link} to='/about/best-in-capstone-3'>
                                Best in Capstone 3
                            </Button>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className='about-me-details'>
                    <h1>Marjohn Tomatao</h1>
                    <div className="titles">
                        <h3>Full Stack Web Developer</h3>
                        <h3>Graphic Designer</h3>
                    </div>
                    <p className='about-me-description'>
                        I am self-taught as a graphic designer since college and I am currently employed at Father Saturnino Urios University in Butuan City as a Graphic Designer and as a Strategic Communications Staff.<br /><br />I learned computer programming and earned a certificate in Full Stack Web Development at Zuitt Coding Bootcamp from May to August 2023. Moreover, during the said bootcamp, I earned two out of three major awards, namely the Capstones&nbsp;2&nbsp;&&nbsp;3 which showcase my exceptional skills in creating a backend web server and a fullstack web app respectively.<br /><br />I am also open to offer my service as a fulltime web developer.
                    </p>
                    <div className='personal-info'>
                        <span>LinkedIn: </span>
                        <Link to='https://www.linkedin.com/in/m-tomatao/' target='_blank'>
                            https://www.linkedin.com/in/m-tomatao/
                        </Link><br />
                        <p><span>Email: </span><a href="mailto:tomataomarjohn@gmail.com">tomataomarjohn@gmail.com</a></p>
                        <p><span>Address: </span>Buenavista, Agusan del Norte, PH</p>
                        <p><span>Phone: </span>+639991130968</p>
                    </div>                    
                    <div className='d-lg-none'>
                        <hr />
                        <div className='cert-btns'>
                            <Button as={Link} to='https://share.zertify.zuitt.co/certificate/20315512-5638-4257-bada-4ae0ff6e218a/' target='_blank'>
                                View Certificate
                            </Button>
                            <Button as={Link} to='/skills/web-development/best-in-capstone-2'>
                                Best in Capstone 2
                            </Button>
                            <Button as={Link} to='/skills/web-development/best-in-capstone-3'>
                                Best in Capstone 3
                            </Button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}
 
export default AboutMe;