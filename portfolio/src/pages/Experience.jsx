import { useEffect, useRef } from 'react'
import '../styles/Experience.css'
import { experienceData } from '../data/experienceData'

function Experience() {
    const itemRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    } else {
                        // Optional: remove visible class to fade out when scrolling up
                        // entry.target.classList.remove('visible') 
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref)
            })
        }
    }, [])

    const addToRefs = (el) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current.push(el)
        }
    }

    return (
        <div className="experience-container">
            <h1 className="experience-title">Professional Experience</h1>

            <div className="timeline">
                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        ref={addToRefs}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-start-date">{exp.date}</span>
                            <h3 className="timeline-company">{exp.company}</h3>
                            <h4 className="timeline-role">{exp.role}</h4>
                            <p className="timeline-location">{exp.location}</p>

                            <div className="timeline-description">
                                <ul>
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
