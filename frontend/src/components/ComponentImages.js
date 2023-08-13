// Languages List
import html5 from '../images/html5.svg'
import css3 from '../images/css3.svg'
import javascript from '../images/javascript.svg'
// Frameworks
import bootstrap from '../images/bootstrap.svg'
import expressjs from '../images/expressjs.svg'
import nodejs from '../images/nodejs.svg'
import reactjs from '../images/reactjs.svg'
import ejs from '../images/ejs.svg'
import redux from '../images/redux.svg'
// DevTools
import git from '../images/git.svg'
import postman from '../images/postman.svg'
import robo3t from '../images/robo3t.svg'
import render from '../images/render.svg'
import vercel from '../images/vercel.svg'
// Databases
import nosql from '../images/nosql.svg'
import mongo from '../images/mongo.svg'
// Category
import logomaking from '../images/logomaking.webp'
import poster from '../images/poster.webp'
import publication from '../images/publication.webp'
import photoedit from '../images/photoedit.webp'
import manipulation from '../images/manipulation.webp'
import mockup from '../images/mockup.webp'
// Graphic Tools
import ps from '../images/ps.svg'
import ai from '../images/ai.svg'
import ind from '../images/ind.svg'
import lrc from '../images/lrc.svg'
import xd from '../images/xd.svg'
import figma from '../images/figma.svg'
// Place Holder
import placeholder from '../images/placeholder.webp'

const LanguagesListImg = ({language}) => {

    switch (language) {
        case 'HTML5':
            return (<img src={html5} alt="html5" />);
        case 'CSS3':
            return (<img src={css3} alt="css3" />);
        case 'JavaScript':
            return (<img src={javascript} alt="javascript" />);
        default:
            return (<img src={placeholder} alt="placeholder" />)
    }

}

const FrameworksListImg = ({framework}) => {

    switch (framework) {
        case 'Bootstrap':
            return (<img src={bootstrap} alt="bootstrap" />);
        case 'Express.js':
            return (<img src={expressjs} alt="expressjs" />);
        case 'Node.js':
            return (<img src={nodejs} alt="nodejs" />);
        case 'React.js':
            return (<img src={reactjs} alt="reactjs" />);
        case 'EJS':
            return (<img src={ejs} alt="ejs" />);
        case 'Redux':
            return (<img src={redux} alt="redux" />);
        default:
            return (<img src={placeholder} alt="placeholder" />)
    }
}

const DevToolsListImg = ({tool}) => {

    switch (tool) {
        case 'Git':
            return (<img src={git} alt="git" />);
        case 'Postman':
            return (<img src={postman} alt="postman" />);
        case 'Robo 3T':
            return (<img src={robo3t} alt="robo3t" />);
        case 'Render':
            return (<img src={render} alt="render" />);
        case 'Vercel':
            return (<img src={vercel} alt="vercel" />);
        default:
            return (<img src={placeholder} alt="placeholder" />)
    }
}

const DatabaseListImg = ({database}) => {

    switch (database) {
        case 'NoSQL':
            return (<img src={nosql} alt="nosql" />);
        case 'MongoDB':
            return (<img src={mongo} alt="mongo" />);
        default:
            return (<img src={placeholder} alt="placeholder" />)
    }

}

const CategoriesListImg = ({category}) => {

    switch (category) {
        case 'Logo':
            return (<img src={logomaking} alt="logomaking" />);
        case 'Posters':
            return (<img src={poster} alt="poster" />);
        case 'Publications':
            return (<img src={publication} alt="publication" />);
        case 'Photo Editing':
            return (<img src={photoedit} alt="photoedit" />);
        case 'Image Manipulation':
            return (<img src={manipulation} alt="manipulation" />);
        case 'Mockup Templates':
            return (<img src={mockup} alt="mockup" />);
        default:
            return (<img src={placeholder} alt="placeholder" />)
    }
}

const GraphicToolsListImg = ({tool}) => {

    switch (tool) {
        case 'Photoshop':
            return (<img src={ps} alt="ps" />);
        case 'Illustrator':
            return (<img src={ai} alt="ai" />);
        case 'InDesign':
            return (<img src={ind} alt="ind" />);
        case 'Lightroom':
            return (<img src={lrc} alt="lrc" />);
        case 'Adobe XD':
            return (<img src={xd} alt="xd" />);
        case 'Figma':
            return (<img src={figma} alt="figma" />);
        default:
            return (<img src={placeholder} alt="placeholder" />)
    }
}
 
export {
    LanguagesListImg,
    FrameworksListImg,
    DevToolsListImg,
    DatabaseListImg,
    CategoriesListImg,
    GraphicToolsListImg
};