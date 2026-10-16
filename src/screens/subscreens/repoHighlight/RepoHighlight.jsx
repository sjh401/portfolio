import './RepoHighlight.css'

export default function Repos() {
    return (
        <div id="home-projects-div" className="text-center">
            <h2>Featured Projects</h2>
            <ul className="home-project-list">
                <li className="home-project-listitem">
                    <span id="home-p3" className="home-project-term">
                        <a href="https://forumtopia.netlify.app/" className="home-project-link text-center">
                            Forumtopia - MERN - GA Unit 3 Project
                        </a>
                    </span>
                    <span className="home-project-desc">
                        Social media platform to share posts. Built wiht MongoDB, ExpressJS, ReactJS, NodeJS.
                    </span>
                </li>
                <li className="home-project-listitem">
                    <span className="home-project-desc">
                        A web app that helps users discover and explore amusement park and stadium concessions. Using ReactJS and Ruby on Rails, the project demonstrates front-end development, interactive UI components, and responsive design.
                    </span>
                    <span id="home-p4" className="home-project-term">
                        <a href="https://destination-hot-dog.netlify.app" className="home-project-link text-center">
                            Destination Hot Dog - React, Ruby on Rails - GA Unit 4 Project
                        </a>
                    </span>
                </li>
                {/* <li className="home-project-listitem">
                    <span id="home-hackathon-sept-2021" className="home-project-term" >
                        <a href="https://pamper-pups.surge.sh/" className="home-project-link text-center">
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
