import { Link } from "react-router-dom";

const SideNav = () => {

    return ( 
        <div className="row">
            <div className="col-1 d-md-none d-flex justify-content-center">
                <div id="mySidenav" className="sidenav">
                    <Link className="sidenav-btn" to="/">Home</Link>
                    <hr />
                    <p className="sidenav-btn">Web Development</p>
                    <Link className="sidenav-btn" to="/projects/web-development">Projects</Link>
                    <Link className="sidenav-btn" to="/projects/graphic-design">Skills</Link>
                    <hr />
                    <p className="sidenav-btn">Skills</p>
                    <Link className="sidenav-btn" to="/">About Me</Link>
                    <Link className="sidenav-btn" to="/">Contact</Link>
                </div>
            </div>
        </div>
    );
}
 
export default SideNav;