import ColorCard, { ColorCardProps } from '../ColorCard/ColorCard'
import { ColorGlassContent } from './ColorGlass.style'

export interface iColorGlass {
	color?: ColorCardProps['color']
	children?: React.ReactNode
}
const ColorGlass = (props: iColorGlass) => {
	const { color = 'magenta' } = props

	return (
		<ColorGlassContent>
			<ColorCard color={color} marker={true} />
			{props.children}
		</ColorGlassContent>
	)
}

export default ColorGlass
