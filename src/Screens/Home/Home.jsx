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
                        <div className="home-project-div"  style={{backgroundImage:"url(https://i.imgur.com/T7Zj0rj.png)"}}>
                            <a href="https://sjh401.github.io/What_Should_You_Drink/">
                                    <p>General Assembly SEI Project 1</p>
                                    <p>What Should You Drink</p>
                                </a>
                        </div>
                        <div className="home-project-div"  style={{backgroundImage:"url(https://i.imgur.com/DV2pqoj.png)"}}>
                            <a href="https://unruffled-khorana-2d5436.netlify.app/">
                                <p>General Assembly SEI Project 2</p> 
                                <p>Chick'n'r React Base Game</p>
                            </a>
                        </div>
                        <div className="home-project-div" style={{backgroundImage:"url(https://i.imgur.com/5gzMpHW.png)"}}>
                            <a href="https://stoic-cray-4ca41b.netlify.app/">
                                <p>General Assembly SEI Project 3</p>
                                <p>Forumtopia Group MERN Forum</p>
                                </a>
                        </div>
                </div>
            </div>
        </Layout>
    )
}
