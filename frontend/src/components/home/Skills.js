import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { AllContext } from "../../contexts/AllContexts";
import placeholder from '../../images/placeholder.webp'

const Skills = () => {

    useFetch(`${process.env.REACT_APP_API_URL}/skills`, 'SET_SKILLS');
    const { skills } = useContext(AllContext);

    if (skills) {


        // [WEB DEVELOPER SKILLS]
        const devSkills = skills[0].dev;

        // LANGUAGES
        const languagesList = devSkills.languages.map((language, i) => {
            
            return (
                <div key={i}>
                    <div className="skill-icon">
                        <img src={placeholder} alt="placeholder" />
                    </div>
                    <p>{ language }</p>
                </div>
            )
        });

        // FRAMEWORKS
        const frameworksList = devSkills.frameworks.map((framework, i) => {
            
            return (
                <div key={i}>
                    <div className="skill-icon">
                        <img src={placeholder} alt="placeholder" />
                    </div>
                    <p>{ framework }</p>
                </div>
            )
        });

        // DEV TOOLS
        const devToolsList = devSkills.tools.map((tool, i) => {
            
            return (
                <div key={i}>
                    <div className="skill-icon">
                        <img src={placeholder} alt="placeholder" />
                    </div>
                    <p>{ tool }</p>
                </div>
            )
        });

        // DATABASES
        const databasesList = devSkills.databases.map((database, i) => {
            
            return (
                <div key={i}>
                    <div className="skill-icon">
                        <img src={placeholder} alt="placeholder" />
                    </div>
                    <p>{ database }</p>
                </div>
            )
        });

        // DEV OTHERS
        const devOthersList = devSkills.others.map((skill, i) => {
            
            return (
                <p key={i}>
                    { `• ${ skill }` }
                </p>
            )
        });

        // [GRAPHIC DESIGN SKILLS]

        const graphicSkills = skills[0].graphic;

        // CATEGORIES
        const categoriesList = graphicSkills.genre.map((skill, i) => {
            
            return (
                <div key={i}>
                    <div className="skill-icon">
                        <img src={placeholder} alt="placeholder" />
                    </div>
                    <p>{ skill }</p>
                </div>
            )
        });

        // CATEGORIES
        const graphicToolsList = graphicSkills.tools.map((tool, i) => {
        
            return (
                <div key={i}>
                    <div className="skill-icon">
                        <img src={placeholder} alt="placeholder" />
                    </div>
                    <p>{ tool }</p>
                </div>
            )
        });
        
        return ( 
            <div className="skills">
                <h1>Skills</h1>
                <div className="dev">
                    <h3>Web Development</h3>
                    <hr />
                    <div>
                        <div>
                            <h2>Languages</h2>
                            <div className="skills-list">
                                { languagesList }
                            </div>
                        </div>
                        <div>
                            <h2>Frameworks</h2>
                            <div className="skills-list">
                                { frameworksList }
                            </div>
                        </div>
                        <div>
                            <h2>Tools</h2>
                            <div className="skills-list">
                                { devToolsList }
                            </div>
                        </div>
                        <div>
                            <h2>Databases</h2>
                            <div className="skills-list">
                                { databasesList }
                            </div>
                        </div>
                        <div>
                            <h2>Others</h2>
                            <div className="other-skills">
                                { devOthersList }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="graphic">
                    <h3>Graphic Design</h3>
                    <hr />
                    <div>
                        <div>
                            <h2>Category</h2>
                            <div className="skills-list">
                                { categoriesList }
                            </div>
                        </div>
                        <div>
                            <h2>Tools</h2>
                            <div className="skills-list">
                                { graphicToolsList }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
 
export default Skills;