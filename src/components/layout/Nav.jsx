// import { fas } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

import './Layout.css'

export default function Nav(props) {
    const [ toggle, setToggle ] = useState(false)
    return (
        <div>
            {/* <div 
                // role="dialog" 
                // aria-modal="true" 
                // aria-labelledby="welcome_message" 
                className="welcome" 
                style={{height: (toggle === false) ? '100vh': '0vh',visibility: (toggle === false) ? 'visible': 'hidden'}}
            >
                <div 
                    className="towork"  
                    onClick={() => setToggle(prevToggle=> !prevToggle)}
                >
                    <h2 id="welcome_message">Welcome</h2>
                    <div></div>
                    <nav aria-label="Quick Nav" className="header-children">
                        <a href="#about-div" className="header-links">About</a>
                        <a href="#projects-div" className="header-links">Projects</a>
                        <button class="header-links resume">Resume</button>
                    </nav>
                </div>
            </div> */}
            <header>
                <div className="header-nav">
                    <div className="header-children">
                        Welcome to my portfolio
                    </div>
                    <nav aria-label="Primary" className="header-children">
                        <a href="#about-div" className="header-links">About</a>
                        <a href="#projects-div" className="header-links">Projects</a>
                    </nav>
                </div>
            </header>

        </div>
    )
}
