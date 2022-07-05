import { GlassCardBorderBottom, GlassCardBorderTop, GlassCardContainer, GlassCardContent } from './GlassCard.style'

interface GlassCardProps {
  children?: React.ReactNode
}
const GlassCard = (props: GlassCardProps) => {
  return (
    <GlassCardContainer>
      <GlassCardBorderTop />
      <GlassCardContent>{props.children}</GlassCardContent>
      <GlassCardBorderBottom />
    </GlassCardContainer>
  )
}

export default GlassCard
