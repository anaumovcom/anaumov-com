import React, {useContext} from 'react';
import {HeaderWrapper, Logo, Menu, NickTag} from "./header.style";
import LogoSVG from "../../assets/logo.svg";
import RoutingContext from "../../contexts/routing.context";
import {PageRoute} from "../../pages/pages.types";
import MenuOption from "../menu-option/menu-option.component";

const Header = () => {
    const {activePage} = useContext(RoutingContext);

    return (
        <HeaderWrapper>
            <Logo src={LogoSVG}/>
            <NickTag>@anaumovcom</NickTag>
            <Menu>
                <MenuOption link={PageRoute.WELCOME}>WELCOME</MenuOption>
                <MenuOption link={PageRoute.RESUME}>RESUME</MenuOption>
                <MenuOption link={PageRoute.PORTFOLIO}>PORTFOLIO</MenuOption>
                <MenuOption link={PageRoute.ABOUT}>ABOUT</MenuOption>
            </Menu>
        </HeaderWrapper>
    );
};

export default Header;