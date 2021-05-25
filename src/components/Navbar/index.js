import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
                        Steven Chang
                    </NavLogo>
                    <MobileIcon onClick = {toggle} scrollNav={scrollNav}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem scrollNav={scrollNav}>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            scrollNav={scrollNav}
                            >About Me</NavLinks>
                        </NavItem>
                        <NavItem scrollNav={scrollNav}>
                            <NavLinks to="resume"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            scrollNav={scrollNav}
                            >Resume</NavLinks>
                        </NavItem>
                        <NavItem scrollNav={scrollNav}>
                            <NavLinks to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            scrollNav={scrollNav}
                            >Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
