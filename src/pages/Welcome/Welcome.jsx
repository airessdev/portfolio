import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Welcome = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/accueil');
    };

    return (
        <div className='welcome'>
            <Header />
            <div className='welcome-content'>
                <h1 className="animated-title">Welcome to <span>My</span> Frontend Developer Portfolio</h1>
                <p className="animated-text">Hi! I'm a passionate frontend developer with expertise in creating responsive and interactive web applications. Explore my projects and get to know more about my skills and experience.</p>
                <button onClick={handleButtonClick} className="animated-button">Get Started</button>
            </div>

        </div>
    );
}

export default Welcome;
