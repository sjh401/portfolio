import Skills from '../subscreens/skills/Skills'
import './About.css'
import Layout from '../../components/layout/Layout'


export default function About(props) {
    return (
        <>
            <Layout>
                <div id="about-div">
                    <div className="about">
                        <img src="../../../../../../assets/head.jpeg" alt="" className="profile"/>
                        <div className="about-info">
                            Hello all, I am software Engineer specializing in frontend development, accessible web applications, and digital accessibility solutions. Experienced building responsive web experiences using JavaScript, React, Ruby on Rails, HTML, and CSS. Skilled in developing user-focused applications, implementing accessibility standards using WCAG and ARIA, and collaborating with cross-functional teams to deliver scalable technology solutions.
                        </div>
                    </div>
                    <div className="slides">
                        <Skills/>
                    </div>
                </div>
            </Layout>
        </>
    )
}
