import styled from 'styled-components'
const colors = {
	orange: '#FF844F',
	magenta: '#FF5F68'
}
interface ColorProps {
	color: 'orange' | 'magenta'
}

export const YearListContainer = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 10px 0;
	gap: 20px;
	width: 100%;
`
export const YearCardContainer = styled('div')`
	display: flex;
	padding: 10px 0;
	gap: 20px;
	justify-content: start;
	width: 100%;
`

export const YearColor = styled('div')<ColorProps>`
	background-color: ${({ color }) => colors[color]};
	border: 2px solid rgba(255, 255, 255, 0.5);
	border-radius: 8px;
	width: 20px;
	height: 40px;
`

export const YearDescription = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 2px;
`

export const Year = styled('div')`
	color: white;
	font-weight: 600;
	transform: rotate(-90deg);
	font-size: 12px;
	width: 16px;
	margin: 19px 0 0 2px;
`
