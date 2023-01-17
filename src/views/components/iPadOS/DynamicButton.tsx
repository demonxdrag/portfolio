import gsap from 'gsap'
import { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchHovered, dispatchTarget } from '../../../state/cursor'
import { RootState } from '../../../store'
import GlassCard from '../GlassCard/GlassCard'
import config from './config'
import { DynamicButtonContainer } from './iPadOS.style'

interface iDynamicButton {
	children: React.ReactNode
	active?: boolean
	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}
export const DynamicButton = (props: iDynamicButton) => {
	const dispatch = useDispatch()
	const setHovered = (payload: boolean) => dispatch(dispatchHovered(payload))
	const setTarget = (payload: HTMLElement) => dispatch(dispatchTarget(payload))
	const cursor = useSelector((state: RootState) => state.cursor.cursor)
	const target = useSelector((state: RootState) => state.cursor.target)
	let active = props.active || true

	const handleMouseOver = (e: MouseEvent) => {
		if (active) {
			setHovered(true)
			const target = e.target as HTMLElement
			const borderRadius = Number(window.getComputedStyle(target).borderRadius.slice(0, -2) as any)
			setTarget(target)

			gsap.to(cursor, {
				duration: config.transitionSpeed,
				borderRadius: borderRadius,
				width: target.clientWidth,
				height: target.clientHeight,
				scale: 1.1
			})
		}
	}

	const handleMouseOut = (e: MouseEvent) => {
		setHovered(false)
		if (cursor && target) {
			gsap.to(cursor, {
				duration: config.transitionSpeed,
				x: e.clientX - config.radius / 2,
				y: e.clientY - config.radius / 2,
				width: config.radius,
				height: config.radius,
				borderRadius: '100px',
				scale: 1,
				backgroundImage: 'none',
				filter: 'blur(0px)'
			})
			gsap.to(target, {
				duration: config.transitionSpeed,
				x: 0,
				y: 0,
				scale: 1,
				boxShadow: '0 7px 15px rgba(0,0,0,0.0)'
			})
		}
	}

	return (
		<DynamicButtonContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={props.onClick}>
			<GlassCard>{props.children}</GlassCard>
		</DynamicButtonContainer>
	)
}

export default DynamicButton
