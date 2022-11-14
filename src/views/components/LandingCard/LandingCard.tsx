import { Text, Title } from '../../../style/fonts.style'
import { LandingCardContent, LandingSplash, TextGroup } from './LandingCard.style'

export interface iLandingCard {
	project: {
		title: string
		date: string
		client: string
		product: string
	}
	splash?: string
	borderRadius?: number
}
const LandingCard = (props: iLandingCard) => {
	const { project, splash = 'splash.svg', borderRadius = 10 } = props
	const parsedLandingName = project.title.toLowerCase().split(' ').join('-')
	return (
		<LandingCardContent>
			<LandingSplash src={`/projects/${parsedLandingName}/${splash}`} alt={project.title} />
			<TextGroup borderRadius={borderRadius}>
				<Title>{project.title}</Title>
				<Text>{project.date}</Text>
				<Text>
					<b>{project.client}</b>
				</Text>
				<Text>{project.product}</Text>
			</TextGroup>
		</LandingCardContent>
	)
}

export default LandingCard
