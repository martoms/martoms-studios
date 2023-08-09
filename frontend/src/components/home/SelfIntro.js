import placeholder from '../../images/placeholder.webp'

const SelfIntro = () => {
    return (
        <div className="self-intro">
            <h1>Marjohn Tomatao</h1>
            <div className="titles">
                <h3>Full Stack Web Developer</h3>
                <h3>Graphic Designer</h3>
            </div>
            <p>
                I am a versatile individual at your service! Equipped with skills in MERN Full-stack Web&nbsp;Development and Graphic Design.
            </p>
            <div className='self-intro-pic'>
                <img src={placeholder} alt="placeholder" />
            </div>
        </div>
    );
}
 
export default SelfIntro;