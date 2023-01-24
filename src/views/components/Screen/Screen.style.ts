import styled from 'styled-components'

export const Screen = styled('div')`
	padding: 40px 200px;
	min-height: calc(100dvh - 80px);
	min-height: calc(100vh - 80px);
	@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
		padding: 40px 20px;
	}
`
