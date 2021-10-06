import './About.css'
import Skills from '../skills/Skills'

export default function About(props) {
    return (
            <div id="about-div">
                <div className="about">
                    <img src="https://i.imgur.com/l42KkNE.jpg?1" alt="headshot" className="profile"/>
                    <div className="about-info">
                        Hello all, I am a software engineer with a background in hospitality. I love of trivia, which fuels my desire to learn and disseminate my knowledge as far and wide as possible. There isn’t a problem that can’t be solved with ingenuity and by being more stubborn than the issue. 
                    </div>
                </div>
                <div className="slides">
                    <Skills />
                </div>
            </div>
    )
}
