import { Title } from '../../../style/fonts.style'
import ProjectCard, { iProjectCard } from '../../components/ProjectCard/ProjectCard'
import LandingCard, { iLandingCard } from '../../components/LandingCard/LandingCard'
import { Screen } from '../../components/Screen/Screen.style'
import { LandingContainer, ProjectContainer, ProjectsScreenContainer } from './Projects.style'

const Projects = () => {
	const projects: iProjectCard[] = [
		{
			project: {
				title: 'UAM Estudiantes',
				client: 'Universidad Autónoma de Madrid',
				product: 'Interactive web experience',
				date: '2020'
			}
		},

		{
			project: {
				title: 'CoMove',
				client: 'CoMove Fitness',
				product: 'Mobile app for personal training',
				date: '2020'
			}
		},
		{
			project: {
				title: 'Flash Class',
				client: 'American Language Academy',
				product: 'Mobile app for online learning',
				date: '2019'
			}
		},
		{
			project: {
				title: 'Black Play',
				client: 'Black Play',
				product: 'Interactive web experience',
				date: '2020'
			}
		},
		{
			project: {
				title: 'American Language Web',
				client: 'American Language Academy',
				product: 'Interactive webpage',
				date: '2018'
			}
		}
	]

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
		<Screen>
			<ProjectsScreenContainer>
				<Title>Projects</Title>
				<ProjectContainer>
					{Object.values(projects).map(project => (
						<ProjectCard key={project.project.title} project={project.project} splash={project.splash} markerColor={'magenta'} />
					))}
				</ProjectContainer>
				<Title>Landing Pages</Title>
				<LandingContainer>
					{Object.values(landings).map(landing => (
						<LandingCard key={landing.project.title} project={landing.project} splash={landing.splash} borderRadius={landing.borderRadius} />
					))}
				</LandingContainer>
			</ProjectsScreenContainer>
		</Screen>
	)
}

export default Projects
