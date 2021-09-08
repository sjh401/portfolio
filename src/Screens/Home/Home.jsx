import About from "../about/About";
import Repos from "../repos/Repos";
import Welcome from "../welcome/Welcome";
import Skills from "../skills/Skills";
import './Home.css'
import Layout from "../../components/layout/Layout";

export default function Home() {
    return (
        <>
        <Welcome />
        <Layout>
            <div className="home-div">
                <Skills />
                <About />
                <Repos />
                
            </div>
        </Layout> 
        </>
    )
}

// 12100e
// 30321c
// 4a4b2f
// 6b654b
// d4df9e