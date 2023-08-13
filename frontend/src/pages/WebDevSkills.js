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
                            <Button as={Link} to='https://share.zertify.zuitt.co/certificate/20315512-5638-4257-bada-4ae0ff6e218a/' target="_blank">
                                Front-End Course
                            </Button>
                            <Button as={Link} to='https://share.zertify.zuitt.co/certificate/0aecaa8d-e58d-440c-a911-a1152d4f1d03/' target="_blank">
                                Back-End Course
                            </Button>
                        </div>
                        <p>Full-Stack and other certificates will follow after the processing.</p>
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