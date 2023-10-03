import { Link } from 'react-router-dom';
import github from '../images/f-github.svg'
import linkedin from '../images/f-linkedin.svg'
import upwork from '../images/f-upwork.svg'
import phone from '../images/f-phone.svg'
import email from '../images/f-email.svg'

const Footer = () => {

    const year = new Date(Date.now()).toLocaleString('en-US', { year: 'numeric' })

    return ( 
        <>
        <div className="row prefooter">
            <div className="col-12 col-md-5">
                <div className="row">
                    <div className="col-12 travel-plans">
                        <h4>Sitemap</h4>
                        <Link to='/projects/web-development'>
                            <p>Web-Dev Projects</p>
                        </Link>
                        <Link to='/skills/web-development'>
                            <p>Web-Dev Skills</p>
                        </Link>
                        <Link to='/projects/graphic-design'>
                            <p>Graphic Design Projects</p>
                        </Link>
                        <Link to='/skills/graphic-design'>
                            <p>Graphic Design Skills</p>
                        </Link>
                        <Link to='/about'>
                            <p>About</p>
                        </Link>
                        <Link to='/contact'>
                            <p>Contact</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-2">
                <div className='row'>
                    <div className="col-12 links">
                        <h4>Links</h4>
                        <Link to="https://github.com/martoms" target="_blank"><p><img src={github} alt="github" />GitHub</p></Link>
                        <Link to="https://www.linkedin.com/in/m-tomatao/" target="_blank"><p><img src={linkedin} alt="linkedin" />LinkedIn</p></Link>
                        {/* <Link to="https://www.facebook.com/martomsstudios" target="_blank"><p><img src={fb} alt="linkedin" />Facebook</p></Link> */}
                        <Link to="https://www.upwork.com/freelancers/~010e1495f770d6ef34" target="_blank"><p><img src={upwork} alt="upwork" />Upwork</p></Link>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-5">
                <div className="row">
                    <div className="col-12 col-lg-7 contacts">
                        <h4>Contacts</h4>
                        <p><img src={phone} alt="phone" />+639991130968</p>
                        <a href="mailto:tomataomarjohn@gmail.com"><p><img src={email} alt="email" />tomataomarjohn@gmail.com</p></a>
                    </div>
                </div>
            </div>
        </div>


        <footer>
            <p>martoms_studios</p>
            <p>Marjohn Tomatao | Full Stack Web Developer | MERN Stack</p>
            <p>Copyright &copy; { year }. All Rights Reserved</p>
            <hr />
        </footer>
        </>
    );
}
 
export default Footer;