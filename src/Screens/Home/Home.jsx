import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

export default function Home() {
    
    return (
        <Layout>
            <div className='tosubmit'>
                <div>
                    Welcome!
                    
                    More coming soon...
                </div>
                <div>
                    <ul>
                        <li><a href="https://sjh401.github.io/What_Should_You_Drink/">General Assembly SEI Project 1: What Should You Drink</a></li>
                        <li><a href="https://unruffled-khorana-2d5436.netlify.app/">General Assembly SEI Project 2: Chick'n'r React Base Game</a></li>
                        <li><a href="https://stoic-cray-4ca41b.netlify.app/">General Assembly SEI Project 3: Forumtopia Group MERN Forum</a></li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
