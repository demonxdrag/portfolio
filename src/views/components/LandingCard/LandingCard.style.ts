import styled from 'styled-components'

export const LandingSplash = styled('img')`
	height: 100px;
	width: 200px;
`

export const LandingCardContent = styled('div')`
	display: flex;
	padding: 10px 0;
	gap: 20px;
	height: 100px;
	width: 200px;
	flex-shrink: 1;
	justify-content: start;
	align-items: center;
`

interface textGroupProps {
	borderRadius?: number
}
export const TextGroup = styled('div')<textGroupProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	text-align: left;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: ${({ borderRadius }) => `${borderRadius}px`};
	gap: 3px;
	width: 220px;
	height: 80px;
	margin-left: -220px;
	padding: 20px;
	backdrop-filter: blur(15px);
	opacity: 0;
	transition: all 0.5s;

	&:hover,
	&:focus,
	&:active {
		opacity: 1;
	}
`
