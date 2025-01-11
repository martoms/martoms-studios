import profilepic from "../images/profilepic.webp";
import placeholder from "../images/placeholder.webp";
import { Button, Breadcrumb, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import DownloadFile from "../components/DownloadFile";
const resume = "https://martoms-studios.vercel.app/Tomatao_Marjohn_Resume.pdf";

const AboutMe = () => {
  const { download } = DownloadFile();

  return (
    <div id="about-me">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </Breadcrumb>
      <div className="about-me-content">
        <div className="about-me-pic">
          {<img src={profilepic} alt="profilepic" /> || (
            <img src={placeholder} alt="placeholder" />
          )}
          <div className="d-none d-lg-block">
            <hr />
            <div className="cert-btns">
              <Button
                as={Link}
                to="https://share.zertify.zuitt.co/certificate/6b4d58f0-cc66-4b3b-96f6-5f2936d3ba71/"
                target="_blank"
              >
                MERN Full Stack Certificate
              </Button>
              <Dropdown className="dropdown-btn">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Short Course Certificates
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="https://share.zertify.zuitt.co/certificate/56f8b561-90b9-4716-9e0b-addf894c5043/"
                    target="_blank"
                  >
                    AWS Fundamentals
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://share.zertify.zuitt.co/certificate/923a66e6-c4d0-4fcc-b79d-7dbfae22c930/"
                    target="_blank"
                  >
                    AWS Serverless
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://share.zertify.zuitt.co/certificate/d4e39626-dc0b-4218-a533-099dc1f9e56b/"
                    target="_blank"
                  >
                    Unit Test
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button as={Link} to="/about/best-in-capstone-2" target="_blank">
                Best in Capstone 2
              </Button>
              <Button as={Link} to="/about/best-in-capstone-3" target="_blank">
                Best in Capstone 3
              </Button>
              <Button
                variant="success"
                onClick={() => download(resume)}
                style={{ fontWeight: "900" }}
              >
                Download CV
              </Button>
            </div>
            <hr />
          </div>
        </div>
        <div className="about-me-details">
          <h1>Marjohn Tomatao</h1>
          <div className="titles">
            <h3>Software Engineer | Graphic Designer</h3>
          </div>
          <p className="about-me-description">
            As a passionate and detail-oriented full-stack developer, I
            specialize in crafting robust and scalable web applications. My
            expertise lies in leveraging the power of the Scala Play Framework
            or Node.js for backend development, building interactive and
            user-friendly frontends with Vue/Nuxt, and managing data seamlessly
            with PostgreSQL or MongoDB.
            <br />
            <br />
            I thrive on creating efficient and innovative solutions that bridge
            user needs with technical excellence. Whether it's designing
            responsive user interfaces, optimizing server-side performance, or
            ensuring data integrity, I am committed to delivering high-quality
            results that make an impact.
            <br />
            <br />I am also open to offer my service as a freelance web
            developer.
          </p>
          <div className="personal-info">
            <span>LinkedIn: </span>
            <Link to="https://www.linkedin.com/in/m-tomatao/" target="_blank">
              https://www.linkedin.com/in/m-tomatao/
            </Link>
            <br />
            <p>
              <span>Email: </span>
              <a href="mailto:tomataomarjohn@gmail.com">
                tomataomarjohn@gmail.com
              </a>
            </p>
            <p>
              <span>Address: </span>Talamban, Cebu City
            </p>
            <p>
              <span>Phone: </span>+63105583385
            </p>
          </div>
          <div className="d-lg-none">
            <hr />
            <div className="cert-btns">
              <Button
                as={Link}
                to="https://share.zertify.zuitt.co/certificate/20315512-5638-4257-bada-4ae0ff6e218a/"
                target="_blank"
              >
                View Certificate
              </Button>
              <Dropdown className="dropdown-btn">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Short Course Certificates
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="https://share.zertify.zuitt.co/certificate/56f8b561-90b9-4716-9e0b-addf894c5043/"
                    target="_blank"
                  >
                    AWS Fundamentals
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://share.zertify.zuitt.co/certificate/923a66e6-c4d0-4fcc-b79d-7dbfae22c930/"
                    target="_blank"
                  >
                    AWS Serverless
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://share.zertify.zuitt.co/certificate/d4e39626-dc0b-4218-a533-099dc1f9e56b/"
                    target="_blank"
                  >
                    Unit Test
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                as={Link}
                to="/skills/web-development/best-in-capstone-2"
                target="_blank"
              >
                Best in Capstone 2
              </Button>
              <Button
                as={Link}
                to="/skills/web-development/best-in-capstone-3"
                target="_blank"
              >
                Best in Capstone 3
              </Button>
              <Button
                variant="success"
                onClick={() => download(resume)}
                style={{ fontWeight: "900" }}
              >
                Download CV
              </Button>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default AboutMe;
