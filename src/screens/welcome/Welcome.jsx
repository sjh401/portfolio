import { useState } from "react"
import "./Welcome.css"

export default function Welcome() {
    const [ toggle, setToggle ] = useState(false)
    return (
        <div className="welcome" style={{height: (toggle === false) ? '100vh': '0vh',visibility: (toggle === false) ? 'visible': 'hidden'}}>
            <div className="towork"  onClick={() => setToggle(prevToggle=> !prevToggle)}>
                <div>Welcome</div>
                <div>View My Work</div>
            </div>
        </div>
    )
}
