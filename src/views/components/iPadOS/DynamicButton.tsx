import gsap from 'gsap'
import { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchHovered, dispatchTarget } from '../../../state/cursor'
import { RootState } from '../../../store'
import config from './config'
import { Button } from './iPadOS.style'

export const DynamicButton = () => {
  const dispatch = useDispatch()
  const setHovered = (payload: boolean) => dispatch(dispatchHovered(payload))
  const setTarget = (payload: HTMLElement) => dispatch(dispatchTarget(payload))
  const cursor = useSelector((state: RootState) => state.cursor.cursor)
  const target = useSelector((state: RootState) => state.cursor.target)

  const handleMouseOver = (e: MouseEvent) => {
    setHovered(true)
    const target = e.target as HTMLElement
    const borderRadius = Number(window.getComputedStyle(target).borderRadius.slice(0, -2) as any)
    setTarget(target)

    gsap.to(cursor, config.transitionSpeed, {
      borderRadius: borderRadius,
      width: target.clientWidth,
      height: target.clientHeight,
      scale: 1.1
    })
  }

  const handleMouseOut = (e: MouseEvent) => {
    setHovered(false)
    if (cursor && target) {
      gsap.to(cursor, config.transitionSpeed, {
        x: e.clientX - config.radius / 2,
        y: e.clientY - config.radius / 2,
        width: config.radius,
        height: config.radius,
        borderRadius: '100px',
        scale: 1,
        backgroundImage: 'none',
        filter: 'blur(0px)'
      })
      gsap.to(target, config.transitionSpeed, {
        x: 0,
        y: 0,
        scale: 1,
        boxShadow: '0 7px 15px rgba(0,0,0,0.0)'
      })
    }
  }

  return (
    <Button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Hello
    </Button>
  )
}

export default DynamicButton
