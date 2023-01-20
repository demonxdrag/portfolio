import { Year, YearCardContainer, YearColor } from './YearCard.style'

export interface YearCardProps {
	year: number
	color?: 'orange' | 'magenta'
	children?: React.ReactNode
}
const YearCard = (props: YearCardProps) => {
	const { year, color = 'orange' } = props
	return (
		<YearCardContainer>
			<YearColor color={color}>
				<Year>{year}</Year>
			</YearColor>
			{props.children}
		</YearCardContainer>
	)
}

export default YearCard
