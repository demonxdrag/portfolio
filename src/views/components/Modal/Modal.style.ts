import styled from 'styled-components'
interface modalProps {
	borderRadius?: number
}
export const ModalContainer = styled('div')<modalProps>`
	position: fixed;
	z-index: 10;
	border-radius: ${({ borderRadius }) => `${borderRadius}px`};
	background-color: white;
	box-shadow: 0 7px 15px rgba(0, 0, 0, 0);
	pointer-events: none;
	`

export const ModalBackdrop = styled('div')`
	position: fixed;
	content: ' ';
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 5;
	pointer-events: none;
`
