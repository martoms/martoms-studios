// Languages List
import html5 from '../images/html5.svg'
import css3 from '../images/css3.svg'
import javascript from '../images/javascript.svg'
import ts from '../images/ts.svg'
import php from '../images/php.svg'
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
import mysql from '../images/mysql.svg'
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
// [Graphic Design Projects]
// Philippine Bamboo Month
import bamboo1 from '../images/bamboo1.webp'
import bamboo2 from '../images/bamboo2.webp'
// BlueTernatea
import blueternate from '../images/blueternate.webp'
// Benny's Spooky Edit War 2022
import composite1 from '../images/composite1.webp'
import composite2 from '../images/composite2.webp'
import composite3 from '../images/composite3.webp'
import composite4 from '../images/composite4.webp'
import composite5 from '../images/composite5.webp'
// Tulay ng Vianney
import pub1 from '../images/pub1.webp'
// Product Editing Service
import product from '../images/product.webp'
// aiCerebrum 1.0
import mockup1 from '../images/mockup1.webp'


// Place Holder
import placeholder from '../images/placeholder.webp'
import { Carousel } from 'react-bootstrap'

const LanguagesListImg = ({language}) => {

    switch (language) {
        case 'HTML5':
            return (<img src={html5} alt="html5" />);
        case 'CSS3':
            return (<img src={css3} alt="css3" />);
        case 'JavaScript':
            return (<img src={javascript} alt="javascript" />);
        case 'TypeScript':
            return (<img src={ts} alt="ts" />);
        case 'PHP':
            return (<img src={php} alt="php" />);
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
        case 'MySQL':
            return (<img src={mysql} alt="mysql" />);
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

const GraphicProjectsImg = ({title}) => {

    switch (title) {
        case 'Philippine Bamboo Month':
            return (
                <Carousel interval={3000}>
                    <Carousel.Item>
                        <img src={bamboo1} alt="bamboo1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={bamboo2} alt="bamboo2" />
                    </Carousel.Item>
                </Carousel>
            );
        case 'BlueTernatea':
            return (<img src={blueternate} alt="blueternate" />);
        case 'Benny\'s Spooky Edit War 2022':
            return (
                <Carousel interval={3000}>
                    <Carousel.Item>
                        <img src={composite1} alt="composite1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={composite2} alt="composite2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={composite3} alt="composite3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={composite4} alt="composite4" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={composite5} alt="composite5" />
                    </Carousel.Item>
                </Carousel>
            );
        case 'Tulay ng Vianney':
            return (<img src={pub1} alt="pub1" />);
        case 'Product Editing Service':
            return (<img src={product} alt="product" />);
        case 'aiCerebrum 1.0':
            return (<img src={mockup1} alt="mockup1" />);
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
    GraphicToolsListImg,
    GraphicProjectsImg
};