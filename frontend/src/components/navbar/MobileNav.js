import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavToggle from '../script_dependencies/NavToggle';

const MobileNav = () => {
    return ( 
        <Navbar id="navbar" className="navbar d-md-none sticky-top" bg='dark'>
            {/* Collapse button */}
            <button className="navbar-toggler hamburger-button" type="button" onClick={NavToggle} style={{ zIndex: 10 }}>
                <div className="animated-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>


            {/* Navbar brand */}
            <div className="ms-auto">
            <Link className="navbar-brand" to="/">
                <img src="/images/martoms-studios.svg" alt="logo" id="logo" />
            </Link>
            </div>
        </Navbar>
    );
}


export default MobileNav;