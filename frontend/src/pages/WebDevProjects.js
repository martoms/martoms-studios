import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { AllContext } from "../contexts/AllContexts";
import { Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import loading from '../images/loading.gif';

const WebDevProjects = () => {

    useFetch(`${process.env.REACT_APP_API_URL}/projects/web-development`, 'SET_DEVPROJ');
    const { devProj } = useContext(AllContext);
   
    if (devProj) {

        const mostRecent = devProj.sort((a, b) => {
            return b.order - a.order
        });

        const webDevProj = mostRecent.map(proj => {

            const { _id, project, subtitle } = proj

            return (
                <Button key={_id} className="pointer" as={Link} to={`/projects/web-development/${_id}`}>
                    <h4>{ project }</h4>
                    <p>{ subtitle }</p>
                </Button>
            )
        });
        
        return (
            <div id="projects">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Projects</Breadcrumb.Item>
                </Breadcrumb>
                <h1>Projects</h1>
                <h3>Web Development</h3>
                <div className="web-dev-proj">
                    { webDevProj }
                </div>
            </div>
        );
    } else {
        return (
            <div id="projects">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Projects</Breadcrumb.Item>
                </Breadcrumb>
                <h1>Projects</h1>
                <h3>Web Development</h3>
                <div className="loading">
                    <img src={loading} alt="loading" />
                </div>
            </div>
        );
    }
}
 
export default WebDevProjects;