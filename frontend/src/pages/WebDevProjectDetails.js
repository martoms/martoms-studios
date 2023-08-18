import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFormatDate from "../hooks/useFormatDate";
import { Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import loading from '../images/loading.gif';

const WebDevProjectDetails = () => {

    const { id } = useParams();
    const { readableDate, timePassed } = useFormatDate();
    const { details } = useFetch(`${process.env.REACT_APP_API_URL}/projects/web-development/${id}`)

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
            <div className="dev-project-details">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/projects/web-development">
                        Projects
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{ project }</Breadcrumb.Item>
                </Breadcrumb>
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
                        {
                            project === 'Zuitt Capstone 2' &&
                            <Button as={Link} to='/projects/web-development/certificates/best-in-capstone-2'>
                                View Certificate
                            </Button>
                        }
                        {
                            project === 'Zuitt Capstone 3' &&
                            <Button as={Link} to='/projects/web-development/certificates/best-in-capstone-3'>
                                View Certificate
                            </Button>
                        }
                        <Button as={Link} to={url} target="_blank">
                            View Project
                        </Button>
                        <Button as={Link} to={repository.url} target="_blank">
                            {`View Code on ${repository.platform}`}
                        </Button>
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
        );
    } else {
        return ( 
            <div className="dev-project-details">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/projects/web-development">
                        Projects
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="project-description">
                    <div className="loading">
                        <img src={loading} alt="loading" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default WebDevProjectDetails;