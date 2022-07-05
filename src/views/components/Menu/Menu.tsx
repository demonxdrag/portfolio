import ColorCard from '../ColorCard/ColorCard'
import GlassCard from '../GlassCard/GlassCard'
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
          <GlassCard>Home</GlassCard>
          <GlassCard>Bio</GlassCard>
          <GlassCard>Code</GlassCard>
          <GlassCard>Design</GlassCard>
        </MenuItemContainer>
      </MenuColorContainer>
    </MenuContainer>
  )
}

export default Menu
