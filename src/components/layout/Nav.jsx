import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

import './Layout.css'

export default function Nav(props) {
    const [ toggle, setToggle ] = useState(false)
    return (
        <header>
            <div className="welcome" style={{height: (toggle === false) ? '100vh': '0vh',visibility: (toggle === false) ? 'visible': 'hidden'}}>
                <div className="towork"  onClick={() => setToggle(prevToggle=> !prevToggle)}>
                    <div>Welcome, I am Stephen Harrity.</div>
                    <div>I am a full-stack developer.</div>
                    <div className="entrance-icon">
                        <FontAwesomeIcon icon={fas.faAngleDoubleDown} />
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <div className="header-children">
                    Welcome to my portfolio
                </div>
                <nav className="header-children">
                    <a href="#about-div" className="header-links">About</a>
                    <a href="#projects-div" className="header-links">Projects</a>
                </nav>
            </div>
        </header>
    )
}
