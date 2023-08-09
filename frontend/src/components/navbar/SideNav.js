import { Link } from "react-router-dom";

const SideNav = () => {

    return ( 
        <div className="row">
            <div className="col-1 d-md-none d-flex justify-content-center">
                <div id="mySidenav" className="sidenav">
                    <Link className="sidenav-btn" to="/">Home</Link>
                    <Link className="sidenav-btn" to="/">Projects</Link>
                    <Link className="sidenav-btn" to="/">Tools</Link>
                    <Link className="sidenav-btn" to="/">About Me</Link>
                    <Link className="sidenav-btn" to="/">Contact</Link>
                </div>
            </div>
        </div>
    );
}
 
export default SideNav;