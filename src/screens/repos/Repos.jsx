import './Repo.css'

export default function Repos() {
    return (
        <div id="projects-div">
                <div id="p1" className="home-project-div" >
                    <a href="https://sjh401.github.io/What_Should_You_Drink/" className="home-project-link">
                        <div className="home-project-div" >What Should You Drink - JS - GA Unit 1 Project</div>
                    </a>
                </div>
                <div id="p2" className="home-project-div">
                    <a href="https://chicknr.netlify.app/" className="home-project-link">
                        <div className="home-project-div" >Chick'n'r - MERN - GA Unit 2 Project</div>
                    </a>
                </div>
                <div id="p3" className="home-project-div">
                    <a href="https://forumtopia.netlify.app/" className="home-project-link">
                        <div className="home-project-div"  >Forumtopia - MERN - GA Unit 3 Project</div>
                        </a>
                </div>
                <div id="p4" className="home-project-div">
                    <a href="https://destination-hot-dog.netlify.app" className="home-project-link">
                        <div className="home-project-div"  >Destination Hot Dog - React, Ruby on Rails - GA Unit 4 Project</div>
                        </a>
                </div>
                <div id="hackathon-sept-2021" className="home-project-div">
                    <a href="https://pamper-pups.surge.sh/" className="home-project-link">
                        <div className="home-project-div"  >Pamper Pups - MERN - GA Hackathon Project</div>
                        </a>
                </div>
        </div>
    )
}
