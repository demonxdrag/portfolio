import gsap from 'gsap'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import config from './config'
import { Cursor, CursorActionContainer } from './iPadOS.style'
import { Fragment, MouseEvent, useCallback, useEffect, useRef } from 'react'
import { dispatchCursor } from '../../../state/cursor'
import theme from '../../../theme'

interface DynamicCursorProps {
  children?: React.ReactNode
}
const DynamicCursor = (props: DynamicCursorProps) => {
  const dispatch = useDispatch()
  const setCursor = useCallback((payload: Element) => dispatch(dispatchCursor(payload)), [dispatch])
  const isHovered = useSelector((state: RootState) => state.cursor.isHovered)
  const target = useSelector((state: RootState) => state.cursor.target)
  const cursor = useSelector((state: RootState) => state.cursor.cursor)
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursorElement = cursorRef.current
    if (cursorElement) setCursor(cursorElement)
  }, [setCursor, cursorRef])

  const parallaxSpeed = {
    cursor: config.parallaxIndex,
    target: config.parallaxIndex * 1.5
  }

  // Mouse position handler
  const getMoveIndex = (mouseEventDirection: number, elPosition: number, elDimension: number, movementSpeed: number) => {
    let relativePos = mouseEventDirection - elPosition
    return (relativePos - elDimension / 2) / movementSpeed
  }

  const moveCursor = (e: MouseEvent) => {
    if (cursor) {
      // If element is not hovered
      if (!isHovered || !target) {
        gsap.to(cursor, config.transitionSpeed, {
          x: e.clientX - config.radius / 2,
          y: e.clientY - config.radius / 2
        })
        // If element is hovered
      } else {
        gsap.to(target, config.transitionSpeed, {
          x: getMoveIndex(e.clientX, target.getBoundingClientRect().left, target.clientWidth, parallaxSpeed.target),
          y: getMoveIndex(e.clientY, target.getBoundingClientRect().top, target.clientHeight, parallaxSpeed.target),
          scale: 1.1,
          boxShadow: theme.ghostShadow
        })
        gsap.to(cursor, config.transitionSpeed, {
          filter: 'blur(8px)',
          x: target.getBoundingClientRect().left + (e.clientX - target.getBoundingClientRect().left - target.clientWidth / 2) / parallaxSpeed.cursor,
          y: target.getBoundingClientRect().top + (e.clientY - target.getBoundingClientRect().top - target.clientHeight / 2) / parallaxSpeed.cursor,
          backgroundImage: `radial-gradient(circle at ${e.clientX - target.getBoundingClientRect().left}px ${e.clientY - target.getBoundingClientRect().top}px, rgba(255,255,255,0.4), rgba(255,255,255,0))`
        })
      }
    }
  }

  return (
    <CursorActionContainer onMouseMove={moveCursor}>
      <Cursor ref={cursorRef} isHovered={isHovered}></Cursor>
      <Fragment>{props.children}</Fragment>
    </CursorActionContainer>
  )
}

export default DynamicCursor
