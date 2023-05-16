import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons';

function MenutItemList (props: any) {
    const items: [] = props.items.map((item: any) => {
        return <MenuItem key={Math.random()}>{item}</MenuItem>
    })

    return <Menu >
    <MenuButton as={Button} borderRadius='md' background={props.color}>
      {props.name}
      <ChevronDownIcon />
    </MenuButton>
    <MenuList>
       {items}
    </MenuList>
  </Menu>
}

export default MenutItemList ;