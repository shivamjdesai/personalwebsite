import '../styles/About.css'
import profilePic from '../assets/ProfilePicture.jpg'
import { educationData } from '../data/educationData'
import { certificationsData } from '../data/certificationsData'

function About() {
    return (
        <div className="about-container">
            <section className="about-header">
                <img src={profilePic} alt="Shivam Desai" className="about-profile-img" />
                <div className="about-intro">
                    <h1>About Me</h1>
                    <p style={{ marginBottom: '1rem' }}>
                        Hi! I’m Shivam.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        I’m a data analyst who believes that every dataset has a story to tell—and I’m here to tell it. My journey has taken me through various industries, but my passion for uncovering the 'why' behind the numbers remains constant.
                    </p>
                    <p>
                        Off the clock? I’m a huge hoops fan (college & NBA) and a home cook who loves a good&nbsp;culinary&nbsp;challenge.
                    </p>
                </div>
            </section>

            <section className="about-section">
                <h2 className="section-title">Education</h2>
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3>{edu.school}</h3>
                        <p className="text-muted">{edu.degree} • {edu.honors}</p>
                        <p className="text-muted" style={{ marginBottom: '1rem' }}>{edu.date}</p>

                        {edu.details.map((detail, idx) => (
                            <div key={idx} style={{ marginTop: '0.8rem' }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{detail.category}</h4>
                                <ul className="education-list">
                                    {detail.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </section>

            <section className="about-section">
                <h2 className="section-title">Certifications</h2>
                <div className="cert-grid">
                    {certificationsData.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card"
                        >
                            <h3 className="cert-name">{cert.name}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="about-section">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skill-tags">
                    <span className="skill-tag">Domo</span>
                    <span className="skill-tag">Power BI</span>
                    <span className="skill-tag">Tableau</span>
                    <span className="skill-tag">Snowflake</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">Python</span>
                </div>
            </section>
        </div>
    )
}

export default About
