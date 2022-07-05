import { ColorCardBorderBottom, ColorCardBorderTop, ColorCardContainer, ColorCardContent } from './ColorCard.style'

interface ColorCardProps {
  color: 'orange' | 'magenta'
  children?: React.ReactNode
}
const ColorCard = (props: ColorCardProps) => {
  return (
    <ColorCardContainer color={props.color}>
      <ColorCardBorderTop />
      <ColorCardContent>{props.children}</ColorCardContent>
      <ColorCardBorderBottom />
    </ColorCardContainer>
  )
}

export default ColorCard
