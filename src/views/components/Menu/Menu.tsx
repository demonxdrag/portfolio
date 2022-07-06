import { useState } from 'react'
import ColorCard from '../ColorCard/ColorCard'
import DynamicButton from '../iPadOS/DynamicButton'
import { Circle, ColorContainer, Line, MenuColorContainer, MenuContainer, MenuItemContainer } from './Menu.style'
import MenuTrigger from './MenuTrigger'

const Menu = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <MenuContainer>
      <MenuTrigger isOpen={isOpen} setOpen={setOpen} />
      <Circle isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <MenuColorContainer isOpen={isOpen}>
        <ColorContainer isOpen={isOpen}>
          <ColorCard color='orange'></ColorCard>
        </ColorContainer>
        <MenuItemContainer isOpen={isOpen}>
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
