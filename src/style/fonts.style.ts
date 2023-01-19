import styled, { createGlobalStyle } from 'styled-components'
import VarelaRound from './fonts/VarelaRound.ttf'
import Montserrat from './fonts/Montserrat.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Varela-Round';
        src: url(${VarelaRound}) format('truetype');
    }
    
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype');
    }
`

export const Title = styled('h4')`
	font-family: 'Varela-Round';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: ${({ theme }) => theme.fontColor};
	margin: 0;
`

export const AvatarTitle = styled('h4')`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: ${({ theme }) => theme.fontColor};
	margin: 0;
`

export const Text = styled('p')`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	color: ${({ theme }) => theme.fontColor};
	margin: 0;
`
