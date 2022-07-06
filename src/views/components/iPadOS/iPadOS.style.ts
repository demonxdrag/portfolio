import styled from 'styled-components'

export const DynamicButtonContainer = styled('div')`
  border-radius: 10px;

  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
    background-color: rgba(0.3, 0.05, 0.1, 0.6);
  }
`

interface iCursor {
  isHovered: boolean
}
export const Cursor = styled('div')<iCursor>`
  transform: translate(-200px, -200px);
  height: ${({ theme }) => theme.radius}px;
  width: ${({ theme }) => theme.radius}px;
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  border-radius: 200px;
  background-color: ${({ theme, isHovered }) => (isHovered ? theme.mainCursorLiftColor : theme.mainCursorColor)};
  transition: background-color 0.2s ease-in-out;
`

interface iCursorActionContainer {
  children: JSX.Element | JSX.Element[]
}
export const CursorActionContainer = styled('div')<iCursorActionContainer>`
  width: 100%;
  height: 100%;
  position: absolute;
`
