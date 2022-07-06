import styled from 'styled-components'

interface OpenMenu {
  isOpen: boolean
}

export const MenuContainer = styled('div')`
  position: fixed;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const MenuColorContainer = styled('div')<OpenMenu>`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  margin-left: 50px;
  transition: 0.8s ease-in-out;
  ${({ isOpen }) => !isOpen && 'margin-left: -100px'};
`

export const MenuItemContainer = styled('div')<OpenMenu>`
  margin-left: -20%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`

export const ColorContainer = styled('div')<OpenMenu>`
  margin: 10% 0 -10% -10%;
  transition: 1.2s ease-in-out;
  ${({ isOpen }) => !isOpen && 'margin-left: -100px'};
`

export const Circle = styled('div')<OpenMenu>`
  position: fixed;
  left: -70vh;
  border-radius: 1000px;
  border: 1px solid ${({ theme }) => theme.lineColor};
  height: 80vh;
  width: 80vh;
  opacity: 0.1;
  transition: 0.7s ease-in-out;
  ${({ isOpen }) => !isOpen && 'left: -80vh'};
`

export const Line = styled('div')<OpenMenu>`
  position: fixed;
  border-right: 1px solid ${({ theme }) => theme.lineColor};
  height: 80vh;
  left: 60px;
  opacity: 0.1;
  transition: 0.6s ease-in-out;
  ${({ isOpen }) => !isOpen && 'margin-left: -100px'};
`
