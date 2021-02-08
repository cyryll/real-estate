import React, { useEffect, useState } from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button'
import {
    Logo,
    MenuBars,
    Nav,
    NavBtn,
    NavMenu,
    NavMenuLinks
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setscrollNav] = useState(false);
    /* Change NavBar color on scroll*/
    const ChangeNav = () => {
        if (window.scrollY >= 80) {
            setscrollNav(true)
        } else {
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeNav)
    }, [])
    return (
        <Nav scrollNav={scrollNav}>
            <Logo to="/">POAE</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
