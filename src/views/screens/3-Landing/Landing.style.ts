import styled from 'styled-components'

export const LandingScreenContainer = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
`

export const LandingContainer = styled('div')`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
		grid-template-columns: 1fr;
	}
`
