import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './Skills.css'

export default function Skills(props) {
    return (
        <div id="skills-div">
            <div className="skill">
                <div className="skill-icon">
                    <i className="devicon-javascript-plain"></i>
                </div>
                <div className="skill-title">
                    JAVASCRIPT
                </div>
            </div>
            <div className="skill">
                <div className="skill-icon">
                    <i className="devicon-css3-plain"></i>
                </div>
                <div className="skill-title">
                    CSS3
                </div>
            </div>
            <div className="skill">
                <div className="skill-icon">
                    <i className="devicon-html5-plain"></i>
                </div>
                <div className="skill-title">
                    HTML5
                </div>
            </div>
            <div className="skill">
                <div className="skill-icon">
                    <i className="devicon-react-original"></i>
                </div>
                <div className="skill-title">
                    REACT
                </div>
            </div>
            <div className="skill">
                <div className="skill-icon">
                    <i className="devicon-ruby-plain"></i>
                </div>
                <div className="skill-title">
                    RUBY
                </div>
            </div>
            <div className="skill">
                <div className="skill-icon">
                    <i className="devicon-rails-plain"></i>
                </div>
                <div className="skill-title">
                    RAILS
                </div>
            </div>
            <div className="skill">
                <div className="skill-icon">
                    <i className="devicon-mongodb-plain"></i>
                </div>
                <div className="skill-title">
                    MONGODB
                </div>
            </div>
            <div className="skill">
                <FontAwesomeIcon className="skill-icon" icon={fas.faServer} />
                <div className="skill-title">
                    REST API
                </div>
            </div>
            <div className="skill">
                <div className="skill-icon">
                    <i className="devicon-postgresql-plain"></i>
                </div>
                <div className="skill-title">
                    POSTGRESQL
                </div>
            </div>
        </div>
    )
}
