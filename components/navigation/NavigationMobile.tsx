import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import GenericNavi from "./GenericNavi";
function NavigationMobile() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <Flex direction="column">
          <GenericNavi />
        </Flex>
      </MenuList>
    </Menu>
  );
}

export default NavigationMobile;
