import './Repo.css'

export default function Repos() {
    return (
        <div id="projects-div">
            <ul className="repo-project-list">
                <li className="repo-project-listitem">
                    <span id="repo-p1" className="repo-project-term">
                        <a href="https://sjh401.github.io/What_Should_You_Drink/" className="repo-project-link text-center">
                            What Should You Drink - JS - GA Unit 1 Project
                        </a>
                    </span>
                    <span className="repo-project-desc">
                        Vanilla JS app where users can search cocktail recipes.
                    </span>
                </li>
                <li className="repo-project-listitem">
                    <span className="repo-project-desc">
                        A short survival game that finally answers the question of why the chicken crossed the road. Built wiht MongoDB, ExpressJS, ReactJS, NodeJS.
                    </span>
                    <span id="repo-p2" className="repo-project-term" >
                        <a href="https://chicknr.netlify.app/" className="repo-project-link text-center">
                            Chick'n'r - MERN - GA Unit 2 Project
                        </a>
                    </span>
                </li>
                <li className="repo-project-listitem">
                    <span id="repo-p3" className="repo-project-term">
                        <a href="https://forumtopia.netlify.app/" className="repo-project-link text-center">
                            Forumtopia - MERN - GA Unit 3 Project
                        </a>
                    </span>
                    <span className="repo-project-desc">
                        Social media platform to share posts. Built wiht MongoDB, ExpressJS, ReactJS, NodeJS.
                    </span>
                </li>
                <li className="repo-project-listitem">
                    <span className="repo-project-desc">
                        A web app that helps users discover and explore amusement park and stadium concessions. Using ReactJS and Ruby on Rails, the project demonstrates front-end development, interactive UI components, and responsive design.
                    </span>
                    <span id="repo-p4" className="repo-project-term">
                        <a href="https://destination-hot-dog.netlify.app" className="repo-project-link text-center">
                            Destination Hot Dog - React, Ruby on Rails - GA Unit 4 Project
                        </a>
                    </span>
                </li>
                <li className="repo-project-listitem">
                    <span id="repo-hackathon-sept-2021" className="repo-project-term" >
                        <a href="https://pamper-pups.surge.sh/" className="repo-project-link text-center">
                            Pamper Pups - MERN - Hackathon Project
                        </a>
                    </span>
                    <span className="repo-project-desc">
                        A web app for pet owners to find pet services near them. Built wiht MongoDB, ExpressJS, ReactJS, NodeJS.
                    </span>
                </li>
            </ul>
        </div>
    )
}
