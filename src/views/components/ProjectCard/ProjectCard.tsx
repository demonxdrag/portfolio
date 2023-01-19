import React, { Fragment, ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchContent, dispatchOpen } from '../../../state/modal'
import { RootState } from '../../../store'
import { Text, Title } from '../../../style/fonts.style'
import ColorCard, { ColorCardProps } from '../ColorCard/ColorCard'
import DynamicButton from '../iPadOS/DynamicButton'
import ProjectDetail, { iProjectDetail } from '../ProjectDetail/ProjectDetail'
import { ProjectCardContainer, ProjectCardContent, ProjectSplash, TextGroup } from './ProjectCard.style'

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
	const { project, splash = 'splash.png', markerColor = 'magenta' } = props
	const parsedProjectName = project.title.toLowerCase().split(' ').join('-')

	const dispatch = useDispatch()
	const open = useSelector((state: RootState) => state.modal.open)
	const setOpen = (payload: boolean) => dispatch(dispatchOpen(payload))
	const setContent = (payload: ReactNode) => dispatch(dispatchContent(payload))

	const projectCardContent = (
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
	)

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setContent(
			<Fragment>
				<ProjectCardContainer>{projectCardContent}</ProjectCardContainer>
				<ProjectDetail project={parsedProjectName as iProjectDetail['project']} />
			</Fragment>
		)
		setOpen(!open)
	}

	return <DynamicButton onClick={e => handleClick(e)}>{projectCardContent}</DynamicButton>
}

export default ProjectCard
