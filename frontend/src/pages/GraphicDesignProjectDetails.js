import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFormatDate from "../hooks/useFormatDate";
import { Fragment, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { GraphicProjectsImg } from "../components/ComponentImages";

const GraphicDesignProjectDetails = () => {

    const [showDisclaimer, setShowDisclaimer] = useState(true);

    const handleDisclaimerClose = () => {
        setShowDisclaimer(false);
    };

    const { category } = useParams();
    const { readableDate } = useFormatDate();
    const { details } = useFetch(`${process.env.REACT_APP_API_URL}/projects/graphic-design/${category}`)

    if (details) {
        
        const { category, projects } = details;

        const projectList = projects.map(project => {

            const {
                _id,
                title,
                purpose,
                createdOn,
                recepient,
                description,
                tools
            } = project;

            const dateCreated = readableDate(createdOn);

            const toolsList = tools.map((tool, i) => {
                return (
                    <li key={i}>
                        { tool }
                    </li>
                )
            });

            return (
                <div key={_id} className="project-description">
                    <h4>{ title }</h4>
                    <p className="purpose">
                        { purpose }
                    </p>
                    <p className="project-for">
                        for: 
                        <span> { recepient }</span>
                    </p>
                    <div className="project-dates">
                        <p>
                            Created on: 
                            <span> { dateCreated }</span>
                        </p>
                    </div>
                    <div className="project-images">
                        <GraphicProjectsImg title={title} />
                    </div>
                    <p>
                        {description.split('\n').map((line, index) => (
                            <Fragment key={index}>
                                {index > 0 && <><br /><br /></>}
                                {line}
                            </Fragment>
                        ))}
                    </p>
                    <hr />
                    <h5>Tools:</h5>
                    <ul>
                        { toolsList }
                    </ul>
                </div>
            )
        });

        return ( 
            <div className="dev-project-details">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/projects/graphic-design">
                        Projects
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{ category }</Breadcrumb.Item>
                </Breadcrumb>
                <h1>{ category }</h1>
                {
                    showDisclaimer &&
                    <div className="desclaimer">
                        <span 
                            className="close-icon" 
                            onClick={handleDisclaimerClose}
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            &#x2716;
                        </span>
                        <p>
                            More projects in graphic designs will be featured in the future. For now, since the page is still in its early development, I can only feature at least one of each graphic design category due to time constraints. Please watch out for the updates. Cheers!
                        </p>
                    </div>
                }
                <div className="project-list">
                    { projectList }
                </div>
            </div>
        );
    };
}
 
export default GraphicDesignProjectDetails;