import './RepoHighlight.css'

export default function Repos() {
    return (
        <div id="home-projects-div">
                <div id="home-p4" className="home-project-div">
                    <a href="https://destination-hot-dog.netlify.app" className="home-project-link">
                        <div className="home-project-div"  >Destination Hot Dog - React, Ruby on Rails - GA Unit 4 Project</div>
                    </a>
                    <div>
                        A responsive web application designed to help users discover and explore amusement park and stadium food and beverages. Using React and Ruby on Rails, the project demonstrates front-end development, interactive UI components, and responsive design.
                    </div>
                </div>
                {/* <div id="hackathon-sept-2021" className="home-project-div">
                    <a href="https://pamper-pups.surge.sh/" className="home-project-link">
                        <div className="home-project-div"  >Pamper Pups - MERN - Hackathon Project</div>
                        </a>
                </div> */}
        </div>
    )
}
