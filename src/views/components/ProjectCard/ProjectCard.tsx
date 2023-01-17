import { useDispatch, useSelector } from 'react-redux'
import { dispatchOpen } from '../../../state/modal'
import { RootState } from '../../../store'
import { Text, Title } from '../../../style/fonts.style'
import ColorCard, { ColorCardProps } from '../ColorCard/ColorCard'
import DynamicButton from '../iPadOS/DynamicButton'
import { ProjectCardContent, ProjectSplash, TextGroup } from './ProjectCard.style'

export interface iProjectCard {
	project: {
		title: string
		date: string
		client: string
		product: string
	}
	splash?: string
	markerColor?: ColorCardProps['color']
}
const ProjectCard = (props: iProjectCard) => {
	const { project, splash = 'splash.svg', markerColor = 'magenta' } = props
	const parsedProjectName = project.title.toLowerCase().split(' ').join('-')

	const dispatch = useDispatch()
	const open = useSelector((state: RootState) => state.modal.open)
	const setOpen = (payload: boolean) => dispatch(dispatchOpen(payload))

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setOpen(!open)
	}

	return (
		<DynamicButton onClick={e => handleClick(e)}>
			<ProjectCardContent>
				<ColorCard color={markerColor} marker={true} />
				<ProjectSplash src={`/projects/${parsedProjectName}/${splash}`} alt={project.title} />
				<TextGroup>
					<Title>{project.title}</Title>
					<Text>{project.date}</Text>
					<Text>
						<b>{project.client}</b>
					</Text>
					<Text>{project.product}</Text>
				</TextGroup>
			</ProjectCardContent>
		</DynamicButton>
	)
}

export default ProjectCard
