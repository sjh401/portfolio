// import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import './Home.css'

export default function Home() {
    return (
        <Layout>
            <div className="home-div">
                <div className="welcome">
                    Welcome!

                    More coming soon...
                </div>
                <div className="home-projects-div">
                        <div className="home-project-div" >
                            <a href="https://sjh401.github.io/What_Should_You_Drink/" className="home-project-link">
                                <img src="https://i.imgur.com/T7Zj0rj.png" className="home-project-img" alt="project 1"/>
                                <div>General Assembly SEI Project 1: What Should You Drink</div>
                            </a>
                        </div>
                        <div className="home-project-div">
                            <a href="https://unruffled-khorana-2d5436.netlify.app/" className="home-project-link">
                                <img src="https://i.imgur.com/DV2pqoj.png" className="home-project-img" alt="project 2"/>
                                <div>General Assembly SEI Project 2: Chick'n'r React Base Game</div>
                            </a>
                        </div>
                        <div className="home-project-div">
                            <a href="https://stoic-cray-4ca41b.netlify.app/" className="home-project-link">
                            <img src="https://i.imgur.com/5gzMpHW.png" className="home-project-img" alt="project 3"/>
                                <div>General Assembly SEI Project 3: Forumtopia Group MERN Forum</div>
                                </a>
                        </div>
                </div>
            </div>
        </Layout>
    )
}
