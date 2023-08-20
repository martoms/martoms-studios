import profilepic from '../../images/profilepic.webp'
import placeholder from '../../images/placeholder.webp'
import { Link } from 'react-router-dom'

const SelfIntro = () => {
    return (
        <div className="self-intro">
            <div className='self-intro-description'>
                <h1>Marjohn Tomatao</h1>
                <div className="titles">
                    <h3>Full Stack Web Developer</h3>
                    <h3>Graphic Designer</h3>
                </div>
                <p>
                    I am a versatile individual at your service! <br className='d-lg-inline' />Equipped with skills in MERN Full&nbsp;Stack Web&nbsp;Development and Graphic Design.
                </p>
                <Link to='/about'>Show more details and credentials</Link>
                <br /><br />
            </div>
            <div className='self-intro-pic'>
                {
                    <img src={profilepic} alt="profilepic" /> ||
                    <img src={placeholder} alt="placeholder" />
                }
            </div>
        </div>
    );
}
 
export default SelfIntro;