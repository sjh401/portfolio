import About from "../about/About";
import Repos from "../repos/Repos";
import Welcome from "../welcome/Welcome";
import Skills from "../skills/Skills";
import './Home.css'

export default function Home() {
    return (
            <div className="home-div">
                <Welcome />
                <Skills />
                <About />
                <Repos />
                
            </div>
    )
}

// 12100e
// 30321c
// 4a4b2f
// 6b654b
// d4df9e