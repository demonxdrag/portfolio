import styled from 'styled-components'

const colors = {
  orange: 'linear-gradient(180deg, #FFD1BD -56.44%, #FF7438 100%)',
  magenta: 'linear-gradient(180deg, #F14FFF -56.44%, #FF5F68 100%)'
}

interface ColorProps {
  color: 'orange' | 'magenta'
}
export const ColorCardContainer = styled('div')<ColorProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => colors[color]};
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(50px);
  border-radius: 10px;
  height: 100%;
`

export const ColorCardBorderTop = styled('div')`
  box-sizing: border-box;
  width: 100%;
  height: 10px;
  border-radius: 10px 10px 0 0;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  border-right: 2px solid rgba(255, 255, 255, 0.5);
`

export const ColorCardContent = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(151, 151, 151, 0.05)) 1 100%;
`

export const ColorCardBorderBottom = styled('div')`
  box-sizing: border-box;
  width: 100%;
  height: 10px;
  border-radius: 0 0 10px 10px;
  border-bottom: 2px solid rgba(151, 151, 151, 0.05);
  border-left: 2px solid rgba(151, 151, 151, 0.05);
  border-right: 2px solid rgba(151, 151, 151, 0.05);
`
