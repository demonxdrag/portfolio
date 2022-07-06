import { useState } from 'react'
import { Text } from '../../../style/fonts.style'
import ColorCard from '../ColorCard/ColorCard'
import DynamicButton from '../iPadOS/DynamicButton'
import { Circle, ColorContainer, Line, MenuColorContainer, MenuContainer, MenuItemContainer } from './Menu.style'
import MenuTrigger from './MenuTrigger'

const Menu = () => {
  const [isHovered, setHovered] = useState(false)
  const [isOpen, setOpen] = useState(false)

  return (
    <MenuContainer>
      <MenuTrigger isOpen={isOpen} setOpen={setOpen} />
      <Circle isOpen={isOpen} isHovered={isHovered}/>
      <Line isOpen={isOpen} isHovered={isHovered}/>
      <MenuColorContainer isOpen={isOpen} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <ColorContainer isOpen={isOpen}>
          <ColorCard color='orange'></ColorCard>
        </ColorContainer>
        <MenuItemContainer isOpen={isOpen}>
          <DynamicButton>
            <img src='logo.svg' width={30} alt='logo' />
          </DynamicButton>
          <DynamicButton>
            <img src='icons/bio.svg' alt='Bio' />
            <Text>Bio</Text>
          </DynamicButton>
          <DynamicButton>
            <img src='icons/code.svg' alt='Code' />
            <Text>Code</Text>
          </DynamicButton>
          <DynamicButton>
            <img src='icons/design.svg' alt='Design' />
            <Text>Design</Text>
          </DynamicButton>
        </MenuItemContainer>
      </MenuColorContainer>
    </MenuContainer>
  )
}

export default Menu
