// import { fas } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useState } from "react"

import './Layout.css'

export default function Nav(props) {
    // const [ close, setClose ] = useState("welcome")

    return (
        <div>
            <header>
                <div className="header-nav">
                    <div className="header-children">
                        <a href="/" className="header-links">Stephen Harrity</a>
                    </div>
                    <nav aria-label="Primary" className="header-children">
                        <a href="/about" className="header-links">About</a>
                        <a href="/work" className="header-links">Work</a>
                        <a href="/resume" className="header-links">Resume</a>
                    </nav>
                </div>
            </header>

        </div>
    )
}
