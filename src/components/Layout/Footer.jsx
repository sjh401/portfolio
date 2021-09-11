import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Layout.css'

export default function Footer() {
    return (
        <footer>
            <div>
                ©Stephen Harrity 2021
            </div>
            <div>
            <a href="https://github.com/sjh401" target="_blank" rel="noreferrer"><GitHubIcon className="icons"></GitHubIcon></a>
                <a href="https://linkedin.com/in/harritystephen" target="_blank" rel="noreferrer"><LinkedInIcon className="icons"></LinkedInIcon></a>
            </div>
        </footer>
    )
}
