import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header({ onProjectsClick, onIndexClick }) {

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    document.body.style.backdropFilter = isHover ? "blur(5px)" : "none";

    return (
        <>
            <header className='animationHeader' onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                <h3>HurBC</h3>
                <ul>
                    <li>
                        <button onClick={onIndexClick}>
                            <FontAwesomeIcon icon={faHome} style={{ color: "#d0e9ff" }} />
                            <p>Index</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={ onProjectsClick }>
                            <FontAwesomeIcon icon={faFolderOpen} style={{ color: "#d0e9ff" }} />
                            <p>Projects</p>
                        </button>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
