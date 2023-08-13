import Services from '../components/home/Services';
import SelfIntro from '../components/home/SelfIntro';
import Skills from '../components/home/Skills';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div id="landing">
            <Services />
            <SelfIntro />
            <Skills />
            <div className='contact-component'>
                <Contact />
            </div>
        </div>
    );
}
 
export default Home;