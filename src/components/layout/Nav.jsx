// import { fas } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useState } from "react"

import './Layout.css'

export default function Nav(props) {
    // const [ close, setClose ] = useState("welcome")

    return (
        <div>
            {/* <div 
                className= {close} 
                role="presentation"
            >
                <div className="welcome-overlay"></div>
                <div 
                    role="dialog" 
                    aria-modal="true" 
                    aria-label="Welcome to Stephen Harrity's Portfolio" 
                    className="welcome-dialog" 
                    >
                    <div className="welcome-close">
                        <button 
                            className="dialog-close-btn"
                            aria-label="Close Dialog"
                            onClick={() => {
                                console.log('clicked');
                                setClose(prevclose => prevclose.indexOf("close") > -1 ? "welcome": "welcome dialog-close");
                            }
                            }
                        >
                            X
                        </button>
                    </div>
                    <div 
                        className="welcome-content"  
                    >
                        <h2 id="welcome_message">Welcome</h2>
                        <div></div>
                        <nav aria-label="Quick Nav" className="header-children">
                            <a href="/work" className="header-links">Work</a>
                            <a href="/resume" className="header-links">Resume</a>
                        </nav>
                    </div>
                </div>
            </div> */}
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
