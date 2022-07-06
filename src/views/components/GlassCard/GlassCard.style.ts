import styled from 'styled-components'

export const GlassCardContainer = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(50px);
  border-radius: 10px;
  pointer-events: none;
`

export const GlassCardBorderTop = styled('div')`
  box-sizing: border-box;
  width: 100%;
  height: 10px;
  border-radius: 10px 10px 0 0;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  border-right: 2px solid rgba(255, 255, 255, 0.5);
`

export const GlassCardContent = styled('div')`
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

export const GlassCardBorderBottom = styled('div')`
  box-sizing: border-box;
  width: 100%;
  height: 10px;
  border-radius: 0 0 10px 10px;
  border-bottom: 2px solid rgba(151, 151, 151, 0.05);
  border-left: 2px solid rgba(151, 151, 151, 0.05);
  border-right: 2px solid rgba(151, 151, 151, 0.05);
`
