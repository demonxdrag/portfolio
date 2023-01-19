import { Title } from '../../../style/fonts.style'
import LandingCard, { iLandingCard } from '../../components/LandingCard/LandingCard'
import { Screen } from '../../components/Screen/Screen.style'
import { LandingContainer, LandingScreenContainer } from './Landing.style'

const Projects = () => {
	const landings: iLandingCard[] = [
		{
			project: {
				title: 'Mirror Studio',
				client: 'Mirror Studio',
				product: 'Online Portfolio',
				date: '2020'
			},
			splash: 'splash.svg',
			borderRadius: 3
		},

		{
			project: {
				title: 'Tándem',
				client: 'Logística Tándem',
				product: 'Landing page',
				date: '2022'
			},
			splash: 'splash.svg',
			borderRadius: 10
		},
		{
			project: {
				title: 'Verønica Schweppes',
				client: 'Verønica Schweppes',
				product: 'Landing page',
				date: '2020'
			},
			borderRadius: 10
		},
		{
			project: {
				title: 'Anava Design',
				client: 'Anava Design Architecture',
				product: 'Landing page',
				date: '2020'
			},
			borderRadius: 0
		},
		{
			project: {
				title: 'Gestor Procesal Avanzado',
				client: 'Gestor Procesal Avanzado',
				product: 'Landing page',
				date: '2019'
			},
			borderRadius: 0
		},
		{
			project: {
				title: 'Movelab Fisio',
				client: 'Movement Laboratory',
				product: 'Landing page',
				date: '2019'
			},
			splash: 'splash.svg',
			borderRadius: 5
		},
		{
			project: {
				title: 'Hedyla',
				client: 'Hedyla Technologies',
				product: 'Landing page',
				date: '2021'
			},
			splash: 'splash.svg',
			borderRadius: 5
		}
	]

	return (
		<Screen id='landings'>
			<LandingScreenContainer>
				<Title>Landing Pages</Title>
				<LandingContainer>
					{Object.values(landings).map(landing => (
						<LandingCard key={landing.project.title} project={landing.project} splash={landing.splash} borderRadius={landing.borderRadius} />
					))}
				</LandingContainer>
			</LandingScreenContainer>
		</Screen>
	)
}

export default Projects
