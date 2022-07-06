import ColorCard from '../ColorCard/ColorCard'
import DynamicButton from '../iPadOS/DynamicButton'
import { Circle, ColorContainer, Line, MenuColorContainer, MenuContainer, MenuItemContainer } from './Menu.style'

const Menu = () => {
  return (
    <MenuContainer>
      <Circle />
      <Line />
      <MenuColorContainer>
        <ColorContainer>
          <ColorCard color='orange'></ColorCard>
        </ColorContainer>
        <MenuItemContainer>
          <DynamicButton>Home</DynamicButton>
          <DynamicButton>Bio</DynamicButton>
          <DynamicButton>Code</DynamicButton>
          <DynamicButton>Design</DynamicButton>
        </MenuItemContainer>
      </MenuColorContainer>
    </MenuContainer>
  )
}

export default Menu
