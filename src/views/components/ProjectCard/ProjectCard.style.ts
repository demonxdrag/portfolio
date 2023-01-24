import styled from 'styled-components'

export const ProjectSplash = styled('img')`
	height: 100px;
	width: 200px;
`

export const ProjectCardContainer = styled('div')`
	display: flex;
	padding: 30px;
`

export const ProjectCardContent = styled('div')`
	display: flex;
	gap: 20px;
	width: 100%;
	justify-content: start;
	align-items: stretch;
`

export const ProjectCardContentGroup = styled('div')`
	display: flex;
	gap: 20px;
	justify-content: start;
	align-items: center;
	@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`

export const TextGroup = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 3px;
`
