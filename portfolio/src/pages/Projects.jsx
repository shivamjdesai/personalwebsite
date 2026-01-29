import '../styles/Projects.css'
import { projectsData } from '../data/projectsData'

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-intro">
                <h1>Projects</h1>
                <p>
                    Showcasing my work in data engineering, visualization, and analytics.
                    Explore the interactive dashboards below to see how I translate complex data into actionable insights and compelling stories.
                </p>
            </div>

            {projectsData.map((project, index) => (
                <section key={index} className="project-section">
                    <div className="project-section-header">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>

                    <div className="dashboard-grid">
                        {project.dashboards.map((dash) => (
                            <a
                                key={dash.id}
                                href={dash.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dashboard-card"
                            >
                                <div className="card-content">
                                    <span className="card-category">{dash.category}</span>
                                    <h3 className="card-title">{dash.title}</h3>
                                    <span className="card-link-text">Open Dashboard</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Projects
