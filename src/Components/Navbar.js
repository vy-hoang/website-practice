import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return(
        <>
            <nav className="nabar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu avtive' : 'nav-menu'}>
                        <li className='nav-items'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/Services' className='nav-links' onClick={closeMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/Products' className='nav-links' onClick={closeMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/Sign-Up' className='nav-links-mobiles' onClick={closeMenu}>
                                Sign Up 
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
        
    )
}

export default Navbar
