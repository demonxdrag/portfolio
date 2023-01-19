import { useState } from 'react'
import { ModalBarBottom, ModalTriggerInnerCircle, ModalTriggerOuterCircle, ModalBarTop, ModalTriggerContainer, ModalTriggerLine } from './ModalTrigger.style'

interface iModalTrigger {
  isOpen: boolean
  setOpen: (value: boolean) => void
}
const ModalTrigger = (props: iModalTrigger) => {
  const [isHovered, setHovered] = useState(false)
  const { isOpen, setOpen } = props

  return (
    <ModalTriggerContainer isOpen={isOpen} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => setOpen(!isOpen)}>
      <ModalTriggerLine isHovered={isHovered} isOpen={isOpen} />
      <ModalTriggerInnerCircle isHovered={isHovered} isOpen={isOpen} />
      <ModalTriggerOuterCircle isHovered={isHovered} isOpen={isOpen} />
      <ModalBarTop isOpen={isOpen}/>
      <ModalBarBottom isOpen={isOpen}/>
    </ModalTriggerContainer>
  )
}

export default ModalTrigger
