import styled from 'styled-components'

export const MenuContainer = styled('div')`
  position: fixed;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const MenuColorContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuItemContainer = styled('div')`
  margin-left: -20%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`

export const ColorContainer = styled('div')`
  margin-top: 25%;
  margin-left: -40%;
  height: 100%;
  min-height: 40px;
  display: flex;
`

export const Circle = styled('div')`
  border-radius: 1000px;
  border: 1px solid ${({ theme }) => theme.lineColor};
  height: 80vh;
  width: 80vh;
  margin-left: -70vh;
  opacity: 0.1;
`

export const Line = styled('div')`
  border: 1px solid ${({ theme }) => theme.lineColor};
  height: 80vh;
  margin-left: -5vh;
  opacity: 0.1;
`
