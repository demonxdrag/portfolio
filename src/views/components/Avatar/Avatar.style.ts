import styled from 'styled-components'

export const AvatarContainer = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`

export const AvatarName = styled('div')`
	margin-top: -30px;
`

export const AvatarLineArt = styled('div')`
	margin-right: -70px;
	margin-bottom: -700px;
`

interface AvatarViewInterface {
	show: boolean
}
export const AvatarView = styled('div')<AvatarViewInterface>`
	display: ${({ show }) => (show ? 'block' : 'none')};
	height: 45vh;
	margin-top: 30vh;
`
