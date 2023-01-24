import { ColorCardBorderBottom, ColorCardBorderTop, ColorCardContainer, ColorCardContent } from './ColorCard.style'

export interface ColorCardProps {
	color?: 'orange' | 'magenta'
	marker?: boolean
	children?: React.ReactNode
}
const ColorCard = (props: ColorCardProps) => {
	const { color = 'orange', marker = false } = props
	return (
		<ColorCardContainer color={color} marker={marker}>
			<ColorCardBorderTop />
			<ColorCardContent marker={marker}>{props.children}</ColorCardContent>
			<ColorCardBorderBottom />
		</ColorCardContainer>
	)
}

export default ColorCard
