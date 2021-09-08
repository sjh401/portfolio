import { useState } from "react"
import "./Welcome.css"

export default function Welcome() {
    const [ toggle, setToggle ] = useState(false)
    return (
        <div className="welcome" onClick={() => setToggle(prevToggle=> !prevToggle)} style={{height: (toggle === false) ? '100vh': '0vh'}}>
        </div>
    )
}
