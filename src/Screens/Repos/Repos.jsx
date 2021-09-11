import './Repo.css'

export default function Repos() {
    return (
        <div id="projects-div">
                <div id="p1" className="home-project-div" >
                    <a href="https://sjh401.github.io/What_Should_You_Drink/" className="home-project-link">
                        <div className="home-project-div" >What Should You Drink - Vanilla JS</div>
                    </a>
                </div>
                <div id="p2" className="home-project-div">
                    <a href="https://unruffled-khorana-2d5436.netlify.app/" className="home-project-link">
                        <div className="home-project-div" >Chick'n'r - React</div>
                    </a>
                </div>
                <div id="p3" className="home-project-div">
                    <a href="https://stoic-cray-4ca41b.netlify.app/" className="home-project-link">
                        <div className="home-project-div"  >Forumtopia - MERN</div>
                        </a>
                </div>
                <div id="p4" className="home-project-div">
                    <a href="https://awesome-dubinsky-dea5d4.netlify.app" className="home-project-link">
                        <div className="home-project-div"  >Destination Hot Dog - React, Ruby on Rails</div>
                        </a>
                </div>
        </div>
    )
}
