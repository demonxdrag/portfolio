import { Title } from '../../../style/fonts.style'
import ProjectCard, { iProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Screen } from '../../components/Screen/Screen.style'
import { ProjectContainer, ProjectsScreenContainer } from './Projects.style'

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

	return (
		<Screen id='projects'>
			<ProjectsScreenContainer>
				<Title>Projects</Title>
				<ProjectContainer>
					{Object.values(projects).map(project => (
						<ProjectCard key={project.project.title} project={project.project} splash={project.splash} markerColor={'magenta'} />
					))}
				</ProjectContainer>
			</ProjectsScreenContainer>
		</Screen>
	)
}

export default Projects
