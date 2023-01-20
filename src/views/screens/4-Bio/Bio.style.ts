import styled from 'styled-components'
import { Title } from '../../../style/fonts.style'

export const BioScreenContainer = styled('div')`
	padding-top: 40px;
	display: flex;
	flex-shrink: 0;
`

export const BioScreenSplit = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 40px;
	flex-basis: 50%;
	flex-grow: 1;
	padding: 0 80px;
	text-align: left;
`

export const SoftText = styled('span')`
	color: rgba(128, 128, 128, 0.2);
`

export const BigText = styled(Title)`
	font-size: 50px;
	text-align: center;
`

export const TextGroup = styled('div')`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
`

export const HeightGroup = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin: 80px 0;
`

export const Relative = styled('div')`
	position: relative;
`

export const CardDecorator = styled('div')`
	position: absolute;
	top: -15px;
	left: -15px;
	z-index: -10;
	bottom: 50px;
`
