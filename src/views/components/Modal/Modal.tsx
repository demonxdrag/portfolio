import gsap from 'gsap'
import config from '../iPadOS/config'
import { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchOpen } from '../../../state/modal'
import { RootState } from '../../../store'
import { ModalBackdrop, ModalContainer, ModalContent, ModalTopBar } from './Modal.style'
import ModalTrigger from './ModalTrigger'

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
				scale: 1.1,
				borderRadius: config.radius,
				width: bounding.width,
				height: bounding.height,
				left: bounding.left,
				top: bounding.top,
				pointerEvents: 'none',
				overflow: 'hidden'
			}
			const to: gsap.TweenVars = {
				duration: 0.3,
				scale: 1,
				width: '80vw',
				height: '80vh',
				left: '10vw',
				top: '10vh',
				pointerEvents: 'unset',
				overflow: 'auto'
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
				opacity: 1,
				duration: 0.3,
				pointerEvents: 'all'
			}
			const bk0: gsap.TweenVars = {
				opacity: 0,
				duration: 0.3,
				pointerEvents: 'none'
			}
			if (open) gsap.to(backdrop.current, bk1).play()
			else gsap.to(backdrop.current, bk0).play()
		}
		// React Hook useEffect has a missing dependency: 'target'.
		// Either include it or remove the dependency array.
		//
		// I could not figure out how to have target not render this since it replays the animations.
		// I only need the target values when open changes.
		//
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open])

	return (
		<Fragment>
			<ModalBackdrop ref={backdrop} onClick={() => setOpen(false)}></ModalBackdrop>
			<ModalContainer ref={modal} borderRadius={config.radius}>
				<ModalTopBar>
					<ModalTrigger isOpen={open} setOpen={setOpen} />
				</ModalTopBar>
				<ModalContent>{content}</ModalContent>
			</ModalContainer>
		</Fragment>
	)
}

export default Modal
