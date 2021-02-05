import React from 'react'
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

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">POAE</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary = "true">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
