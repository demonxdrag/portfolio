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
	overflow: hidden;
	`

export const ModalBackdrop = styled('div')`
	position: fixed;
	backdrop-filter: blur(5px);
	opacity: 0;
	content: ' ';
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 5;
	pointer-events: none;
`

export const ModalContent = styled('div')`
	width: 100%;
	margin-top: -15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: auto;
`

export const ModalTopBar = styled('div')`
	width: 100%;
`
