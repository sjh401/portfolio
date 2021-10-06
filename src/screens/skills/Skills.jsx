import React, {useState, useEffect} from 'react';
import './Skills.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fa } from '@fortawesome/free-solid-svg-icons'

function Skills() {
  const [increment, setIncrement ] = useState(0);
  const [ display, setDisplay ] = useState([])
    const slides =     [

        { title: 'JAVASCRIPT', icon: <i data-testid="icon" className="devicon-javascript-plain"></i> },
  
        { title: 'REACT', icon: <i data-testid="icon" className="devicon-react-original"></i> },
  
        { title: 'RUBY ON RAILS', icon: <i data-testid="icon" className="devicon-rails-plain"></i> },

        { title: 'CSS3', icon: <i data-testid="icon" className="devicon-css3-plain"></i> },
  
        { title: 'HTML5', icon: <i data-testid="icon" className="devicon-html5-plain"></i> },
  
        { title: 'RUBY', icon: <i data-testid="icon" className="devicon-ruby-plain"></i> },
  
        { title: 'MONGODB', icon:  <i data-testid="icon" className="devicon-mongodb-plain"></i> },
  
        { title: 'REST API', icon: <FontAwesomeIcon data-testid="icon" className="skill-icon" icon={fas.faServer}/> },
  
        { title: 'POSTGRESQL', icon: <i data-testid="icon" className="devicon-postgresql-plain"></i> }
      ]
        const addResetIncrement = () => {
            if(increment === slides.length - 3) {
                setIncrement(0)
            } else {
                setIncrement(prevIncrement => prevIncrement += 3)
            }
        }
        const subResetIncrement = () => {
            if(increment === 0) {
                setIncrement(0)
            } else {
                setIncrement(prevIncrement => prevIncrement -= 3)}
        }

        useEffect(() => {
            setDisplay(slides.filter((slide, index) => index < increment + 3 && index >= increment ))
            // eslint-disable-next-line
        }, [increment])

        if(!display) {
            return (
                <div>...Loading </div>
            )
        }
    return (
        <div className="button-slide">
                {/* <button data-testid="button-prev" className="small" 
                onClick={subResetIncrement}></button> */}
                <div
                    onClick={subResetIncrement}
                >
                    <FontAwesomeIcon data-testid="icon" className="skill-icon" icon={fas.faChevronLeft}/> 
                </div>
            <div id="slide" className="card text-center">
                {display.map((slide, index) => {
                    return(
                        <div key={index} className='skill-div'>
                            <div className="slide-icon">
                                {slide.icon}
                            </div>
                            <div data-testid="title" className="skill-name">{slide.title}</div>
                        </div>
                        )
                    })}
            </div>
                <div
                    onClick={addResetIncrement}
                >
                    <FontAwesomeIcon data-testid="icon" className="skill-icon" icon={fas.faChevronRight}/> 
                </div>
                    {/* <button data-testid="button-next" className="small" 
                    onClick={addResetIncrement}></button> */}
        </div>
    );

}

export default Skills;