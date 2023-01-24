import React, { Fragment, ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchTarget } from '../../../state/cursor'
import { dispatchContent, dispatchOpen } from '../../../state/modal'
import { RootState } from '../../../store'
import { Text, Title } from '../../../style/fonts.style'
import { ColorCardProps } from '../ColorCard/ColorCard'
import ColorGlass from '../ColorGlassCard/ColorGlass'
import DynamicButton from '../iPadOS/DynamicButton'
import ProjectDetail, { iProjectDetail } from '../ProjectDetail/ProjectDetail'
import { ProjectCardContainer, ProjectCardContent, ProjectCardContentGroup, ProjectSplash, TextGroup } from './ProjectCard.style'

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
	const { project, splash = 'splash.png' } = props
	const parsedProjectName = project.title.toLowerCase().split(' ').join('-')

	const dispatch = useDispatch()
	const open = useSelector((state: RootState) => state.modal.open)
	const setOpen = (payload: boolean) => dispatch(dispatchOpen(payload))
	const setContent = (payload: ReactNode) => dispatch(dispatchContent(payload))
	const setTarget = (payload: HTMLElement) => dispatch(dispatchTarget(payload))

	const projectCardContent = (
		<ProjectCardContent>
			<ColorGlass color='magenta'>
				<ProjectCardContentGroup>
					<ProjectSplash src={`/projects/${parsedProjectName}/${splash}`} alt={project.title} />
					<TextGroup>
						<Title>{project.title}</Title>
						<Text>{project.date}</Text>
						<Text>
							<b>{project.client}</b>
						</Text>
						<Text>{project.product}</Text>
					</TextGroup>
				</ProjectCardContentGroup>
			</ColorGlass>
		</ProjectCardContent>
	)

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setTarget(e.target as HTMLElement)
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
