import Services from '../components/home/Services';
import SelfIntro from '../components/home/SelfIntro';
import Skills from '../components/home/Skills';

const Home = () => {
    return (
        <div id="landing">
            <Services />
            <SelfIntro />
            <Skills />
        </div>
    );
}
 
export default Home;