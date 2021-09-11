import { useState } from "react"

import './Layout.css'

export default function Nav(props) {
    const [ toggle, setToggle ] = useState(false)
    return (
        <header>
            <div className="welcome" style={{height: (toggle === false) ? '100vh': '0vh',visibility: (toggle === false) ? 'visible': 'hidden'}}>
                <div className="towork"  onClick={() => setToggle(prevToggle=> !prevToggle)}>
                    <div>Welcome,</div>
                    <div>Let's Get Started</div>
                </div>
            </div>
            <div className="header-nav">
                <div className="header-children">
                    Welcome
                </div>
                <nav className="header-children">
                    <a href="#about-div" className="header-links">About</a>
                    <a href="#skills-div" className="header-links">Skills</a>
                    <a href="#projects-div" className="header-links">Projects</a>
                </nav>
            </div>
        </header>
    )
}
