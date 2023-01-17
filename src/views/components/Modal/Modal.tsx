import gsap from 'gsap'
import { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchOpen } from '../../../state/modal'
import { RootState } from '../../../store'
import config from '../iPadOS/config'
import { ModalBackdrop, ModalContainer } from './Modal.style'

export const Modal = () => {
	const modal = useRef(null)
	const backdrop = useRef(null)
	const target = useSelector((state: RootState) => state.cursor.target)
	const content = useSelector((state: RootState) => state.modal.content)

	const dispatch = useDispatch()
	const open = useSelector((state: RootState) => state.modal.open)
	const setOpen = (payload: boolean) => dispatch(dispatchOpen(payload))

	useEffect(() => {
		if (target) {
			// Modal
			const bounding = target.getBoundingClientRect()
			const from: gsap.TweenVars = {
				duration: 0.3,
				borderRadius: config.radius,
				width: bounding.width,
				height: bounding.height,
				left: bounding.left,
				top: bounding.top,
				pointerEvents: 'none'
			}
			const to: gsap.TweenVars = {
				duration: 0.3,
				width: '80vw',
				height: '80vh',
				left: '10vw',
				top: '10vh',
				pointerEvents: 'unset'
			}
			const op1: gsap.TweenVars = {
				opacity: 1,
				duration: 0.1,
				pointerEvents: 'all'
			}
			const op0: gsap.TweenVars = {
				opacity: 0,
				duration: 0.1,
				pointerEvents: 'none'
			}
			if (open) gsap.timeline().to(modal.current, op1).fromTo(modal.current, from, to).play()
			else gsap.timeline().fromTo(modal.current, to, from).to(modal.current, op0).play()

			// Backdrop
			const bk1: gsap.TweenVars = {
				backdropFilter: 'blur(5px)',
				duration: 0.3,
				pointerEvents: 'all'
			}
			const bk0: gsap.TweenVars = {
				backdropFilter: 'blur(0px)',
				duration: 0.3,
				pointerEvents: 'none'
			}
			if (open) gsap.to(backdrop.current, bk1).play()
			else gsap.to(backdrop.current, bk0).play()

			// Content
		}
	}, [open])

	return (
		<Fragment>
			<ModalBackdrop ref={backdrop} onClick={() => setOpen(false)}></ModalBackdrop>
			<ModalContainer ref={modal} borderRadius={config.radius}>
				{/* {content} */}
			</ModalContainer>
		</Fragment>
	)
}

export default Modal
