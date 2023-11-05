import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, } from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
    return (
        <div className="Card Social">
            <h2>Social Media</h2>
            <div className="boxMedia">
                <a className='socialLinks' href="https://www.instagram.com/bruh._.c/"><FontAwesomeIcon size='2x' icon={faInstagram} /></a>
                <a className='socialLinks' href="https://github.com/HurBC"><FontAwesomeIcon size='2x' icon={faGithub} /></a>
            </div>
        </div>
    );
}

export default SocialMedia;