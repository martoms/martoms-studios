import { Link } from "react-router-dom";

const SideNav = () => {

    return ( 
        <div className="row">
            <div className="col-1 d-md-none d-flex justify-content-center">
                <div id="mySidenav" className="sidenav">
                    <Link className="home-btn" to="/">Home</Link>
                </div>
            </div>
        </div>
    );
}
 
export default SideNav;