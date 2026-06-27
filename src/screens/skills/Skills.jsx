import React, {useState, useEffect} from 'react';
import './Skills.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fa } from '@fortawesome/free-solid-svg-icons'

function Skills() {
  const [increment, setIncrement ] = useState(0);
  const [ display, setDisplay ] = useState([])
    const slides =     [

        { title: 'ACCESSIBILITY', icon: <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" class="fa-brands fa-universal-access"></i> },
        { title: 'JAVASCRIPT', icon: <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="devicon-javascript-plain"></i> },
        { title: 'CSS3', icon: <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="devicon-css3-plain"></i> },
        { title: 'HTML5', icon: <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="devicon-html5-plain"></i> },
        { title: 'REACT', icon: <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="devicon-react-original"></i> },
        { title: 'RUBY', icon: <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="devicon-ruby-plain"></i> },
        { title: 'RUBY ON RAILS', icon: <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="devicon-rails-plain"></i> },
        { title: 'MONGODB', icon:  <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="devicon-mongodb-plain"></i> },
        { title: 'REST API', icon: <FontAwesomeIcon data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="skill-icon" icon={fas.faServer}/> },
        { title: 'POSTGRESQL', icon: <i data-testid="icon" role="presentation" aria-hidden="true" clickable="false" className="devicon-postgresql-plain"></i> },
        { title: 'GITHUB', icon: <i data-testid="icon" class="fa-brands fa-github"></i> },
        { title: 'W3C', icon: <i data-testid="icon" className="fa-brands fa-w3c"></i> }
    ];
        const addResetIncrement = () => {
            if(increment === slides.length - 3) {
                setIncrement(0);
            } else {
                setIncrement(prevIncrement => prevIncrement += 3);
            }
        };
        const subResetIncrement = () => {
            if(increment === 0) {
                setIncrement(slides.length - 3);
            } else {
                setIncrement(prevIncrement => prevIncrement -= 3);
            }
        };

        // const simulateClick = (e) => {
        //     if(e.key === 'Enter' || e.key === ' '){
        //         this.click();
        //     }
        // }

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
                <button
                    className="slide-change"
                    onClick={subResetIncrement}
                    >
                    <FontAwesomeIcon data-testid="icon" className="skill-slider" icon={fas.faChevronLeft}/> 
                </button>
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
                <button
                    className="slide-change"
                    onClick={addResetIncrement}
                >
                    <FontAwesomeIcon data-testid="icon" className="skill-slider" icon={fas.faChevronRight}/> 
                </button>
                    {/* <button data-testid="button-next" className="small" 
                    onClick={addResetIncrement}></button> */}
        </div>
    );

}

export default Skills;