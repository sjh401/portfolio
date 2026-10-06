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
                            Hello all, I am a software engineer specializing in frontend development, accessible web applications, anddigital accessibility solutions. I am passionate about improving acess for everyne through design and am constantly looking to learn new things everyday.
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