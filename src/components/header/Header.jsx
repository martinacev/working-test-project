import { useState, useEffect } from 'react';
import classes from './header.module.css';
import logo from '../../../public/final.png';
import dropdown from '../../assets/svg/dropdown.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 480); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 480);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={classes.container}>
            {isMobileView && (
                <img 
                    className={classes.dropdown} 
                    src={dropdown} 
                    alt='dropdown' 
                    onClick={toggleMenu} 
                />
            )}
            <div className={classes.wrapper}>
                <img className={classes.logo} src={logo} alt="logo" />
                <ul 
                    className={classes.items} 
                    style={{ 
                        display: isMobileView && !isMenuOpen ? 'none' : 'flex' 
                    }}
                >
                    {['Contact', 'About Us', 'Home', 'Gallery'].map((item, index) => (
                        <li className={classes.item} key={index}>
                            <a className={classes.link} href='#'>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
