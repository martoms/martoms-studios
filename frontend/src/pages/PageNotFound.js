import { Link } from "react-router-dom";
import notfound from '../images/notfound.svg';

const PageNotFound = () => {
    return ( 
        <div id="page404" className="page container-fluid d-flex flex-column">
            <div className="row">
                <img src={notfound} alt="notfound" />
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );
}
 
export default PageNotFound;