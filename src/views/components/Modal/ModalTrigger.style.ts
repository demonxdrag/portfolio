import styled from 'styled-components'

interface OpenModal {
  isOpen: boolean
  isHovered?: boolean
}

export const ModalTriggerContainer = styled('div')<OpenModal>`
  position: fixed;
  right: 40px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ModalBarTop = styled('div')<OpenModal>`
  width: 40px;
  height: 10px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #ffd1bd -56.44%, #ff7438 100%);
  transition: 0.5s;
  opacity: 0;
  ${({isOpen}) => isOpen && `
    opacity: 1;
    transform: translateY(10px) rotate(-45deg);
  `}
`

export const ModalBarBottom = styled('div')<OpenModal>`
  width: 40px;
  height: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lineColor}30;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  transition: 0.5s;
  opacity: 0;
  ${({isOpen}) => isOpen && `
    opacity: 1;
    transform: translateY(-10px) rotate(45deg);
  `}
`

export const ModalTriggerInnerCircle = styled('div')<OpenModal>`
  position: absolute;
  top: 15px;
  left: 20px;
  transform: translate(-50%, -50%) ${({ isHovered }) => isHovered && 'scale(1.2)'};
  width: 70px;
  height: 70px;
  border-radius: 100px;
  border: 1px dotted ${({ theme }) => theme.lineColor};
  transition: 0.5s;
  opacity: 0;
  ${({isOpen}) => isOpen && `
    opacity: 0.1;
  `}
`

export const ModalTriggerOuterCircle = styled('div')<OpenModal>`
  position: absolute;
  top: 15px;
  left: 20px;
  transform: translate(-50%, -50%) ${({ isHovered }) => isHovered && 'scale(0.8)'};
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.lineColor};
  transition: 0.5s;
  opacity: 0;
  ${({isOpen}) => isOpen && `
    opacity: 0.1;
  `}
`

export const ModalTriggerLine = styled('div')<OpenModal>`
  position: absolute;
  top: 15px;
  left: 20px;
  transform: translate(-50%, -50%);
  ${({ isOpen }) => isOpen && 'transform: translate(-50%, -50%) rotate(90deg)'};
  ${({ isHovered }) => isHovered && 'transform: translate(-50%, -50%) scale(1.2) rotate(45deg)'};
  width: 0px;
  height: 80px;
  border-right: 1px solid ${({ theme }) => theme.lineColor};
  transition: 0.5s;
  opacity: 0;
  ${({isOpen}) => isOpen && `
    opacity: 0.1;
  `}
`
