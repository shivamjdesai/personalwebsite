import { useState } from 'react'
import '../styles/BTS.css'

function BTS() {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="bts-container">
      <div className="bts-intro">
        <h1>Behind the Scenes</h1>
        <p>
          Welcome to the code kitchen! This page transparently showcases how this portfolio was built.
          Click on any section below to explore the code, understand what it does, and see how it all comes together.
        </p>
        <div className="tech-stack">
          <span className="tech-badge">React</span>
          <span className="tech-badge">Vite</span>
          <span className="tech-badge">CSS Variables</span>
          <span className="tech-badge">React Router</span>
        </div>
      </div>

      {/* Core Architecture Section */}
      <section className="bts-section">
        <button
          className="section-header"
          onClick={() => toggleSection('architecture')}
        >
          <h2>Core Architecture</h2>
          <span className="toggle-icon">{expandedSection === 'architecture' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'architecture' && (
          <div className="section-content">
            <div className="code-block-wrapper">
              <h3>App Routing Setup</h3>
              <p className="description">
                <strong>What it does:</strong> Defines the main application routes using React Router, enabling navigation between Home, About, Experience, Projects, and BTS pages.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Powers the entire navigation system of the website.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">React Router</span>
                <span className="concept-badge">Component Composition</span>
                <span className="concept-badge">Nested Routes</span>
              </div>
              <pre className="code-block">
                {`import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import BTS from './pages/BTS'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="bts" element={<BTS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}`}
              </pre>
            </div>

            <div className="code-block-wrapper">
              <h3>Theme System (Light/Dark Mode)</h3>
              <p className="description">
                <strong>What it does:</strong> Manages the light/dark theme toggle using React state and localStorage to persist user preference.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Provides a seamless theme switching experience across all pages.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">React Hooks (useState, useEffect)</span>
                <span className="concept-badge">localStorage API</span>
                <span className="concept-badge">State Management</span>
              </div>
              <pre className="code-block">
                {`const [theme, setTheme] = useState(
  localStorage.getItem('theme') || 'light'
)

const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  localStorage.setItem('theme', newTheme)
}

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme)
}, [theme])`}
              </pre>
            </div>
          </div>
        )}
      </section>

      {/* Components Section */}
      <section className="bts-section">
        <button
          className="section-header"
          onClick={() => toggleSection('components')}
        >
          <h2>Component Showcase</h2>
          <span className="toggle-icon">{expandedSection === 'components' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'components' && (
          <div className="section-content">
            <div className="code-block-wrapper">
              <h3>Header with Navigation</h3>
              <p className="description">
                <strong>What it does:</strong> Renders the sticky header with signature logo, navigation links, and theme toggle button.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Provides consistent navigation across all pages and quick access to theme switching.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">JSX</span>
                <span className="concept-badge">Props</span>
                <span className="concept-badge">Event Handlers</span>
              </div>
              <pre className="code-block">
                {`import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'
import signature from '/src/assets/Signature_v2.png'

function Header({ theme, toggleTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className="site-header">
            <div className="header-content">
                <Link to="/" className="logo-link" onClick={closeMobileMenu}>
                    <img src={signature} alt="Shivam Desai Signature" className="signature-logo" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="main-nav desktop-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
                    <NavLink to="/bts" className={({ isActive }) => isActive ? 'active' : ''}>BTS</NavLink>

                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </nav>

                {/* Hamburger Menu Button */}
                <button
                    className="hamburger-button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Mobile Menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
                        <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeMobileMenu} aria-label="Close Menu">
                                ✕
                            </button>

                            <div className="mobile-nav-links">
                                <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    Home
                                </NavLink>
                                <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    About
                                </NavLink>
                                <NavLink to="/experience" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    Experience
                                </NavLink>
                                <NavLink to="/projects" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    Projects
                                </NavLink>
                                <NavLink to="/bts" onClick={closeMobileMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                    BTS
                                </NavLink>

                                <button onClick={() => { toggleTheme(); closeMobileMenu(); }} className="theme-toggle mobile-theme-toggle">
                                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}`}
              </pre>
            </div>
          </div>
        )}
      </section>

      {/* Page Implementations Section */}
      <section className="bts-section">
        <button
          className="section-header"
          onClick={() => toggleSection('pages')}
        >
          <h2>Page Implementations</h2>
          <span className="toggle-icon">{expandedSection === 'pages' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'pages' && (
          <div className="section-content">
            <div className="code-block-wrapper">
              <h3>Home Page Hero Section</h3>
              <p className="description">
                <strong>What it does:</strong> Displays the main landing page with profile picture, introduction, and social links.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Creates the first impression and provides quick access to contact information.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">React Icons</span>
                <span className="concept-badge">Semantic HTML</span>
                <span className="concept-badge">Accessibility</span>
              </div>
              <pre className="code-block">
                {`<div className="hero-content">
  <div className="profile-wrapper">
    <img src={profilePic} alt="Shivam Desai" 
         className="profile-image" />
    <a href="https://maps.apple.com/?q=Central+Park+New+York"
       className="location-marker">
      <FaMapMarkerAlt />
      <span className="tooltip">Central Park, NYC</span>
    </a>
  </div>
  
  <h1 className="hero-title">Shivam Desai</h1>
  <p className="hero-description">
    Welcome to my corner of the internet—where spreadsheets 
    meet storytelling and data gets a glow-up.
  </p>
  
  <div className="social-links">
    <a href="mailto:desaishvm@gmail.com">
      <FaEnvelope />
    </a>
    <a href="https://www.linkedin.com/in/shivamjdesai/">
      <FaLinkedin />
    </a>
  </div>
</div>

/* Mobile Responsive Style Update */
@media (max-width: 768px) {
    .profile-image {
        width: 220px; /* Increased from 150px */
        height: 220px;
    }
}`}
              </pre>
            </div>

            <div className="code-block-wrapper">
              <h3>About Page - Dynamic Data Rendering</h3>
              <p className="description">
                <strong>What it does:</strong> Renders education details and certifications from imported data files, creating interactive certification cards.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Separates content from code, making it easy to update credentials without touching component logic.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">Data Separation</span>
                <span className="concept-badge">Component Reusability</span>
                <span className="concept-badge">External Links</span>
              </div>
              <pre className="code-block">
                {`// Education Section
{educationData.map((edu, index) => (
  <div key={index} className="education-card">
    <h3>{edu.school}</h3>
    <p className="text-muted">{edu.degree} • {edu.honors}</p>
    <p className="text-muted">{edu.date}</p>
    
    {edu.details.map((detail, idx) => (
      <div key={idx}>
        <h4>{detail.title}</h4>
        <ul>
          {detail.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
))}

// Certifications Section
{certificationsData.map((cert, index) => (
  <a key={index}
     href={cert.url}
     target="_blank"
     rel="noopener noreferrer"
     className="certification-card">
    <h3>{cert.name}</h3>
    <p className="text-muted">{cert.issuer}</p>
    <p className="text-muted">{cert.date}</p>
  </a>
))}

// Technical Skills Section
<div className="skill-tags">
  <span className="skill-tag">Domo</span>
  <span className="skill-tag">Power BI</span>
  <span className="skill-tag">Tableau</span>
  <span className="skill-tag">Snowflake</span>
  <span className="skill-tag">SQL</span>
  <span className="skill-tag">Python</span>
</div>}`}
              </pre>
            </div>

            <div className="code-block-wrapper">
              <h3>Experience Timeline</h3>
              <p className="description">
                <strong>What it does:</strong> Renders an interactive vertical timeline with experience items that alternate left/right and reveal details on hover.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Showcases professional experience in a visually engaging, chronological format.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">Array.map()</span>
                <span className="concept-badge">Template Literals</span>
                <span className="concept-badge">Conditional Rendering</span>
              </div>
              <pre className="code-block">
                {`{experienceData.map((exp, index) => (
  <div key={index} 
       className={\`timeline-item \${index % 2 === 0 ? 'left' : 'right'}\`}>
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <span className="timeline-start-date">{exp.date}</span>
      <h3 className="timeline-company">{exp.company}</h3>
      <p className="timeline-role">{exp.role}</p>
      <p className="timeline-location">{exp.location}</p>
      
      <div className="timeline-description">
        <ul>
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
))}`}
              </pre>
            </div>

            <div className="code-block-wrapper">
              <h3>Projects Page - Dashboard Grid</h3>
              <p className="description">
                <strong>What it does:</strong> Dynamically renders project dashboard cards in a responsive grid layout, pulling data from projectsData.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Displays interactive dashboard links for the Project (W)NBA section with clean, clickable cards.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">Nested Mapping</span>
                <span className="concept-badge">Dynamic Rendering</span>
                <span className="concept-badge">Data-Driven UI</span>
              </div>
              <pre className="code-block">
                {`{projectsData.map((project, index) => (
  <section key={index} className="project-section">
    <div className="project-section-header">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
    
    <div className="dashboard-grid">
      {project.dashboards.map((dash) => (
        <a key={dash.id}
           href={dash.url}
           target="_blank"
           rel="noopener noreferrer"
           className="dashboard-card">
          <div className="card-content">
            <span className="card-category">{dash.category}</span>
            <h3 className="card-title">{dash.title}</h3>
            <span className="card-link-text">Open Dashboard</span>
          </div>
        </a>
      ))}
    </div>
  </section>
))}`}
              </pre>
            </div>
          </div>
        )}
      </section>

      {/* Styling System Section */}
      <section className="bts-section">
        <button
          className="section-header"
          onClick={() => toggleSection('styling')}
        >
          <h2>Styling System</h2>
          <span className="toggle-icon">{expandedSection === 'styling' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'styling' && (
          <div className="section-content">
            <div className="code-block-wrapper">
              <h3>CSS Variables & Theming</h3>
              <p className="description">
                <strong>What it does:</strong> Defines a centralized color palette and design tokens that automatically switch between light and dark themes.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Ensures consistent styling and enables easy theme switching across the entire site.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">CSS Variables</span>
                <span className="concept-badge">:root Selector</span>
                <span className="concept-badge">Attribute Selectors</span>
              </div>
              <pre className="code-block">
                {`:root {
  --color-primary: #FF0000;
  --color-secondary: #000000;
  --color-bg: #FFFFFF;
  --color-text: #000000;
  --color-text-muted: #666666;
  --color-card-bg: #F5F5F5;
  --color-border: #E0E0E0;
  
  --font-family: 'Outfit', system-ui, sans-serif;
  --font-heading: 'Playfair Display', serif;
}

[data-theme='dark'] {
  --color-bg: #121212;
  --color-text: #FFFFFF;
  --color-text-muted: #A0A0A0;
  --color-card-bg: #1E1E1E;
  --color-border: #333333;
  
  /* Feature: Seamless logo blending */
  mix-blend-mode: screen; 
}`}
              </pre>
            </div>

            <div className="code-block-wrapper">
              <h3>Typography System</h3>
              <p className="description">
                <strong>What it does:</strong> Applies sophisticated font pairing with Outfit for body text and Playfair Display for headings.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Creates a premium, readable design that balances modern and elegant aesthetics.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">Google Fonts</span>
                <span className="concept-badge">Font Stacks</span>
                <span className="concept-badge">Typography Hierarchy</span>
              </div>
              <pre className="code-block">
                {`h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
}

body {
  font-family: var(--font-family);
  font-weight: 300;
  line-height: 1.6;
}`}
              </pre>
            </div>
          </div>
        )}
      </section>

      {/* Data Management Section */}
      <section className="bts-section">
        <button
          className="section-header"
          onClick={() => toggleSection('data')}
        >
          <h2>Data Management</h2>
          <span className="toggle-icon">{expandedSection === 'data' ? '−' : '+'}</span>
        </button>
        {expandedSection === 'data' && (
          <div className="section-content">
            <div className="code-block-wrapper">
              <h3>Experience Data Structure</h3>
              <p className="description">
                <strong>What it does:</strong> Stores professional experience information in a structured array format for easy rendering and maintenance.
              </p>
              <p className="description">
                <strong>Purpose:</strong> Separates content from presentation, making it easy to update experience details without touching component code.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">ES6 Modules</span>
                <span className="concept-badge">Array of Objects</span>
                <span className="concept-badge">Data Modeling</span>
              </div>
              <pre className="code-block">
                {`export const experienceData = [
  {
    company: "MILLER COOPER & CO., LTD.",
    role: "Analyst, Data & Analytics Advisory Services",
    location: "Chicago, Illinois",
    date: "September 2023 - Present",
    description: [
      "Collaborated with clients to identify key business challenges...",
      "Integrated and governed high-volume datasets...",
      "Translated complex datasets into digestible visualizations..."
    ]
  },
  // ... more experiences
]`}
              </pre>
            </div>

            <div className="code-block-wrapper">
              <h3>Certifications Data Structure</h3>
              <p className="description">
                <strong>What it does:</strong> Organizes certification information with links to credential providers (Credly, Snowflake).
              </p>
              <p className="description">
                <strong>Purpose:</strong> Dynamically renders certification cards on the About page with proper attribution and verification links.
              </p>
              <div className="key-concepts">
                <span className="concept-badge">Structured Data</span>
                <span className="concept-badge">External APIs</span>
                <span className="concept-badge">Link Management</span>
              </div>
              <pre className="code-block">
                {`export const certificationsData = [
  {
    name: "SnowPro Core Certification",
    issuer: "Snowflake",
    date: "Issued Dec 18, 2025",
    link: "https://achieve.snowflake.com/profile/..."
  },
  {
    name: "Domo Strategic Seller Proficiency",
    issuer: "Domo",
    date: "Issued Jan 22, 2026",
    link: "https://www.credly.com/users/sjd"
  }
]`}
              </pre>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default BTS
