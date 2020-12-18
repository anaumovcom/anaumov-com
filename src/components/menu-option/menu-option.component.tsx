import React, {useContext} from 'react';
import {MenuOptionWrapper} from "./menu-option.style";
import RoutingContext from "../../contexts/routing.context";

const MenuOption = (props: any) => {
    const {activePage, setActivePage} = useContext(RoutingContext);
    const isActive = activePage === props.link;

    return (
        <MenuOptionWrapper isActive={isActive} onClick={() => setActivePage(props.link)}>
            {props.children}
        </MenuOptionWrapper>
    );
};

export default MenuOption;