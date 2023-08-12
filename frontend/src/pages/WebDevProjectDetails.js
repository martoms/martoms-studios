import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFormatDate from "../hooks/useFormatDate";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react";

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
                <hr />
                <div className="project-links">
                    <Button as={Link} to={url} target="_blank">View Project</Button>
                    <Button as={Link} to={repository.url} target="_blank">{`View Code on ${repository.platform}`}</Button>
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
    };
}
 
export default WebDevProjectDetails;