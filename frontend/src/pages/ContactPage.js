import Contact from "../components/Contact";
import { Breadcrumb } from "react-bootstrap";

const ContactPage = () => {
    return (
        <div id="contact-page">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <h1>Contact &</h1>
                <h1>Collaborate</h1>
                <p className="contact-spiel">
                Let's bring your ideas to life,<br />both in code and design.<br />Reach out today!
                </p>
            </div>
            <Contact />
        </div>
    );
}
 
export default ContactPage;