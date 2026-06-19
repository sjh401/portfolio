import './About.css'
import Skills from '../skills/Skills'

export default function About(props) {
    return (
            <div id="about-div">
                <div className="about">
                    {/* <img src="https://i.imgur.com/l42KkNE.jpg?1" alt="headshot" className="profile"/> */}
                    <div className="about-info">
                        Hello all, I am software Engineer specializing in frontend development, accessible web applications, and digital accessibility solutions. Experienced building responsive web experiences using JavaScript, React, Ruby on Rails, HTML, and CSS. Skilled in developing user-focused applications, implementing accessibility standards using WCAG and ARIA, and collaborating with cross-functional teams to deliver scalable technology solutions.
                    </div>
                </div>
                <div className="slides">
                    <Skills />
                </div>
            </div>
    )
}
