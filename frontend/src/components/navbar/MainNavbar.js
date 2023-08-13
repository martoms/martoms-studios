import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navLogo from '../../images/ms-logo.svg';

const MainNavbar = () => {

    return ( 
        <Navbar id="navbar2" className="navbar d-none d-md-flex px-5 navbar-expand-md fixed-top-transparent">
            {/* Brand Logo Starts */}
            <Link className="navbar-brand" to="/">
                <img src={navLogo} alt="my_logo" id="logo" />
            </Link>
            {/* Brand Logo Ends */}

            {/* Nav Links Starts */}
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="smooth-scroll" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <div className="dropdown">
                        <Link className="smooth-scroll">Web Development</Link>
                        <div className="dropdown-content">
                            <Link to="/projects/web-development">Projects</Link>
                            <Link to="/skills/web-development">Skills</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="dropdown">
                        <Link className="smooth-scroll">Graphic Design</Link>
                        <div className="dropdown-content">
                            <Link to="/projects/graphic-design">Projects</Link>
                            <Link to="/skills/graphic-design">Skills</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </div>
            {/* Nav Links Ends */}
        </Navbar>
    );
}
 
export default MainNavbar;