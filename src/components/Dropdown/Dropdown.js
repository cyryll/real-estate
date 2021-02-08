import { menuData } from "../../data/MenuData"
import { Button } from "../Button"
import { Logo } from "../Navbar/NavbarElements"
import {
    BtnWrap,
    CloseIcon,
    DropdownContainer,
    DropdownLink,
    DropdownMenu,
    DropdownWrapper,
    Icon
} from "./DropdownElements"

const Dropdown = ({toggle, isOpen}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Logo to="/">POAE</Logo>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
