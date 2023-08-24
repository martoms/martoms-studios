import Skills from '../components/home/Skills';
import { Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import zuitt from '../images/zuitt.svg';

const WebDevSkills = () => {
    return (
        <>
        <div id="webdev-skills">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Skills</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Skills</h1>
            <h3>Web Development</h3>
            <hr />
            <div className="skill-bg">
                <div className='skill-info'>
                    <div className='skill-description'>
                        <p>
                            Skills and certifications acquired from:
                        </p>
                        <Link to='https://zuitt.co/' target='_blank'>
                            <h4>
                                <img src={zuitt} alt="zuitt" />
                                Zuitt Coding Bootcamp
                            </h4>
                        </Link>
                        <h6>MERN Stack | Main Course Package</h6>
                        <p>May 2 - August 7, 2023</p>
                    </div>
                    <div className="skill-certs">
                        <p>View Certifications:</p>
                        <div className="skill-links">
                            <Button as={Link} to='https://share.zertify.zuitt.co/certificate/6b4d58f0-cc66-4b3b-96f6-5f2936d3ba71/' target="_blank">
                                MERN Full Stack Certificate
                            </Button>
                            <Button as={Link} to='/skills/web-development/best-in-capstone-2'>
                                Best in Capstone 2
                            </Button>
                            <Button as={Link} to='/skills/web-development/best-in-capstone-3'>
                                Best in Capstone 3
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        <Skills />
        </>
    );
}
 
export default WebDevSkills;