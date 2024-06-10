import React from "react";
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <>
      <Flex justify={'space-between'} align={'center'} height={'120px'} width={'100%'} paddingTop={'80px'} paddingBottom={'80px'}>
        <Menu>
          <MenuButton as={Button} rightIcon={<RxHamburgerMenu/>} className="nav-bar"></MenuButton>
          <MenuList>
            <MenuItem className="menu-item">Volkswagen</MenuItem>
            <MenuItem className="menu-item">Mercedes</MenuItem>
            <MenuItem className="menu-item">BMW</MenuItem>
            <MenuItem className="menu-item">Audi</MenuItem>
            <MenuItem className="menu-item">Porsche</MenuItem>
          </MenuList>
        </Menu>
        <Heading><img class="golf-sinfondo" src="../img/golf-sinfondo.png" alt="This is an image of a Volkswagen Golf R"></img></Heading>
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;
