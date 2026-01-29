import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import '../styles/Home.css'
import profilePic from '../assets/ProfilePicture.jpg'

function Home() {
    return (
        <div className="home-container">
            <div className="hero-content">
                <div className="profile-wrapper">
                    <img src={profilePic} alt="Shivam Desai" className="profile-image" />

                    <a
                        href="https://maps.apple.com/?q=Central+Park+New+York"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-marker"
                        aria-label="Location: Central Park, NYC"
                    >
                        <FaMapMarkerAlt />
                        <span className="tooltip">Central Park, NYC</span>
                    </a>
                </div>

                <h1 className="hero-title">Shivam Desai</h1>
                <p className="hero-description">
                    Welcome to my corner of the internet—where spreadsheets meet storytelling
                    and data gets a glow-up. I'm here to prove that analytics can be as elegant
                    as it is insightful.
                </p>

                <div className="social-links">
                    <a href="mailto:desaishvm@gmail.com" className="social-icon" aria-label="Email">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.linkedin.com/in/shivamjdesai/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
