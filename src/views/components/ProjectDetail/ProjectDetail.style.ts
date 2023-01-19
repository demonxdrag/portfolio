import styled from 'styled-components'

export const ProjectDetailContainer = styled('div')`
	display: flex;
	flex-direction: column;
	width: calc(80vw - 15px);
	overflow: hidden;
	margin: auto;
	gap: 20px;
`

export const ProjectDetailSplit = styled('div')`
	display: flex;
	flex-basis: content;
	justify-content: center;
	align-items: center;
	padding: 20px;
	gap: 20px;

	& > div {
		width: 50%;
		flex-shrink: 1;
		text-align: left;
	}
`

export const TextGroup = styled('div')`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
`
