import './RepoHighlight.css'

export default function Repos() {
    return (
        <div id="home-projects-div">
                <ul className="home-project-list">
                    <li className="home-project-listitem">
                        <span id="home-p3" className="home-project-term">
                            <a href="https://forumtopia.netlify.app/" className="home-project-link">
                                Forumtopia - MERN - GA Unit 3 Project
                            </a>
                        </span>
                        <span className="home-project-desc">
                            A responsive web application.
                        </span>
                    </li>
                    <li className="home-project-listitem">
                        <span id="home-p4" className="home-project-term">
                            <a href="https://destination-hot-dog.netlify.app" className="home-project-link">
                                Destination Hot Dog - React, Ruby on Rails - GA Unit 4 Project
                            </a>
                        </span>
                        <span className="home-project-desc">
                            A responsive web application designed to help users discover and explore amusement park and stadium food and beverages. Using React and Ruby on Rails, the project demonstrates front-end development, interactive UI components, and responsive design.
                        </span>
                    </li>
                    {/* <li className="home-project-listitem">
                        <span id="home-hackathon-sept-2021" className="home-project-term" >
                            <a href="https://pamper-pups.surge.sh/" className="home-project-link">
                                Pamper Pups - MERN - Hackathon Project
                            </a>
                        </span>
                        <span className="home-project-desc">
                            Pamper Pups - MERN - Hackathon Project
                        </span>
                    </li> */}
                </ul>
        </div>
    )
}
