import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return (
        <div className="social">
            <a href="https://www.instagram.com/iran_ferreira712/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/iran-ferreira/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/Iran-Ferreira">
                <GitHubIcon/>
            </a>
        </div>
    )
}