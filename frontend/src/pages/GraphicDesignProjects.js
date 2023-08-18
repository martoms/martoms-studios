import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { AllContext } from "../contexts/AllContexts";
import { Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholder from '../images/placeholder.webp'

const GraphicDesignProjects = () => {

    useFetch(`${process.env.REACT_APP_API_URL}/projects/graphic-design`, 'SET_GRAPHICPROJ');
    const { graphicProj } = useContext(AllContext);
   
    if (graphicProj) {

        const categories = graphicProj.map((project) => {

            const { _id, category } = project;

            const slug = category.split(' ').map(word => word.toLowerCase()).join('-');

            return (
                <Button key={_id} className="pointer" as={Link} to={`/projects/graphic-design/${slug}`}>
                    {/* <img src={placeholder} alt="placeholder" /> */}
                    <h4>{ category }</h4>
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
                <h3>Graphic Design</h3>
                <div className="graphic-proj">
                    { categories }
                </div>
            </div>
        );
    };
}
 
export default GraphicDesignProjects;