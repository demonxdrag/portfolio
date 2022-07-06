import styled from 'styled-components'

interface OpenMenu {
  isOpen: boolean
  isHovered?: boolean
}

export const MenuTriggerContainer = styled('div')<OpenMenu>`
  position: fixed;
  left: 40px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const MenuBarTop = styled('div')<OpenMenu>`
  width: 40px;
  height: 10px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #ffd1bd -56.44%, #ff7438 100%);
  transition: 0.5s;
  ${({isOpen}) => isOpen && `
    transform: translateY(10px) rotate(-45deg);
  `}
`

export const MenuBarBottom = styled('div')<OpenMenu>`
  width: 40px;
  height: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lineColor}30;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  transition: 0.5s;
  ${({isOpen}) => isOpen && `
    transform: translateY(-10px) rotate(45deg);
  `}
`

export const MenuTriggerInnerCircle = styled('div')<OpenMenu>`
  position: absolute;
  top: 15px;
  left: 20px;
  transform: translate(-50%, -50%) ${({ isHovered }) => isHovered && 'scale(1.2)'};
  width: 70px;
  height: 70px;
  border-radius: 100px;
  border: 1px dotted ${({ theme }) => theme.lineColor};
  opacity: 0.1;
  transition: 0.5s;
`

export const MenuTriggerOuterCircle = styled('div')<OpenMenu>`
  position: absolute;
  top: 15px;
  left: 20px;
  transform: translate(-50%, -50%) ${({ isHovered }) => isHovered && 'scale(0.8)'};
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.lineColor};
  opacity: 0.1;
  transition: 0.5s;
`

export const MenuTriggerLine = styled('div')<OpenMenu>`
  position: absolute;
  top: 15px;
  left: 20px;
  transform: translate(-50%, -50%);
  ${({ isOpen }) => isOpen && 'transform: translate(-50%, -50%) rotate(90deg)'};
  ${({ isHovered }) => isHovered && 'transform: translate(-50%, -50%) scale(1.2) rotate(45deg)'};
  width: 0px;
  height: 80px;
  border-right: 1px solid ${({ theme }) => theme.lineColor};
  opacity: 0.1;
  transition: 0.5s;
`
