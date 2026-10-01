// import About from "../subscreens/about/About";
import './Home.css'
import Layout from "../../components/layout/Layout";
import Skills from '../subscreens/skills/Skills';

export default function Home() {
    return (
        <>
        <Layout>
            <div className="home-div">
                <div id="about-div">
                    <div className="about">
                        <div className="about-info">
                            Hello all, I am software Engineer specializing in frontend development, accessible web applications, and digital accessibility solutions. Experienced building responsive web experiences using JavaScript, React, Ruby on Rails, HTML, and CSS. Skilled in developing user-focused applications, implementing accessibility standards using WCAG and ARIA, and collaborating with cross-functional teams to deliver scalable technology solutions.
                        </div>
                    </div>
                    <div className="slides">
                        <Skills/>
                    </div>
                </div>
            </div>
        </Layout> 
        </>
    )
}