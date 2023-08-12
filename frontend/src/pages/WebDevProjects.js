import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { AllContext } from "../contexts/AllContexts";

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
                <div key={_id}>
                    <h4>{ project }</h4>
                    <p>{ subtitle }</p>
                </div>
            )
        });
        
        return (
            <div id="projects">
                <h1>Projects</h1>
                <h3>Web Development</h3>
                <div className="web-dev-proj">
                    { webDevProj }
                </div>
            </div>
        );
    };
}
 
export default WebDevProjects;