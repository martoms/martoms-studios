import { useParams } from "react-router-dom";
import { Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFormatDate from "../hooks/useFormatDate";
import { Fragment } from "react";
import capstone2 from '../images/capstone2.webp';
import capstone3 from '../images/capstone3.webp';
import Contact from "../components/Contact";

const CertificateWithLinks = () => {
    const { certificate } = useParams();
    const { readableDate, timePassed } = useFormatDate();
    
    let certId;
    if (certificate === 'best-in-capstone-2') {
        certId = '64d6ca3c5868776814e63ce1'
    } else if (certificate === 'best-in-capstone-3') {
        certId = '64d6ca3c5868776814e63ce2'
    }

    const { details } = useFetch(`${process.env.REACT_APP_API_URL}/projects/web-development/${certId}`)
    
    if (details) {

        const {
            project,
            subtitle,
            dateCreated,
            latestVersion,
            description,
            skills,
            repository,
            url
        } = details;

        const createdOn = readableDate(dateCreated);
        const lastUpdated = timePassed(latestVersion);

        const skillsList = skills.map((skill, i) => {
            return (
                <li key={i}>
                    { skill }
                </li>
            )
        });

        return (
            <>
            <div className="certificates">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/skills/web-development">Skills</Breadcrumb.Item>
                    <Breadcrumb.Item active>Certificate</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    {
                        certificate === 'best-in-capstone-2' &&
                        <img src={capstone2} alt="capstone 2" />
                    }
                    {
                        certificate === 'best-in-capstone-3' &&
                        <img src={capstone3} alt="capstone 3" />
                    }
                    <div className="verification">
                        <p>
                            For verification purposes, contact:
                        </p>
                        <a href="mailto:helpdesk@zuitt.co">helpdesk@zuitt.co</a>
                    </div>
                    <hr />
                    <div className="project-info">
                        <div className="project-header">
                            <h1>{ project }</h1>
                            <h6>{ subtitle }</h6>
                            <div className="project-dates">
                                <p>
                                    Start created on: 
                                    <span> { createdOn }</span>
                                </p>
                                <p>
                                    Latest version: 
                                    <span> { lastUpdated }</span>
                                </p>
                            </div>
                            <hr className="d-md-none" />
                        </div>
                        <div className="project-links">
                            <Button as={Link} to={url} target="_blank">View Project</Button>
                            <Button as={Link} to={repository.url} target="_blank">{`View Code on ${repository.platform}`}</Button>
                        </div>
                    </div>
                    <div className="project-description">
                        <p>
                            {description.split('\n').map((line, index) => (
                                <Fragment key={index}>
                                    {index > 0 && <><br /><br /></>}
                                    {line}
                                </Fragment>
                            ))}
                        </p>
                        <hr />
                        <h3>Skills:</h3>
                        <ul>
                            { skillsList }
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Contact />
            </div>
            </>
        );
    }
};

const CertificateOnly = () => {
    const { certificate } = useParams();
    
    return (
        <>
        <div className="certificates">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/projects/web-development">Projects</Breadcrumb.Item>
                {
                    certificate === 'best-in-capstone-2' &&
                    <Breadcrumb.Item href="/projects/web-development/64d6ca3c5868776814e63ce1">Zuitt Capstone 2</Breadcrumb.Item>
                }
                {
                    certificate === 'best-in-capstone-3' &&
                    <Breadcrumb.Item href="/projects/web-development/64d6ca3c5868776814e63ce2">Zuitt Capstone 3</Breadcrumb.Item>
                }
                <Breadcrumb.Item active>Certificate</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                {
                    certificate === 'best-in-capstone-2' &&
                    <img src={capstone2} alt="capstone 2" />
                }
                {
                    certificate === 'best-in-capstone-3' &&
                    <img src={capstone3} alt="capstone 3" />
                }
                <div className="verification">
                    <p>
                        For verification purposes, contact:
                    </p>
                    <a href="mailto:helpdesk@zuitt.co">helpdesk@zuitt.co</a>
                </div>
            </div>
        </div>
        <div>
            <Contact />
        </div>
        </>
    );
};
 
export {
    CertificateWithLinks,
    CertificateOnly
};