import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { AllContext } from "../contexts/AllContexts";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholder from '../images/placeholder.webp'

const GraphicDesignProjects = () => {

    useFetch(`${process.env.REACT_APP_API_URL}/skills`, 'SET_SKILLS');
    const { skills } = useContext(AllContext);
   
    if (skills) {

        const categories = skills[0].graphic.genre.map((category, i) => {

            return (
                // <Button key={i} className="pointer" as={Link} to={`/projects/web-development/${_id}`}>
                <Button key={i} className="pointer" as={Link}>
                    <img src={placeholder} alt="placeholder" />
                    <h4>{ category }</h4>
                </Button>
            )
        });
        
        return (
            <div id="projects">
                <h1>Projects</h1>
                <h3>Graphic Design</h3>
                <div className="graphic-proj">
                    { categories }
                </div>
            </div>
        );
    };
}
 
export default GraphicDesignProjects;