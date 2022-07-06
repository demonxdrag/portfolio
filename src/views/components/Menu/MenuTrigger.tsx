import { useState } from 'react'
import { MenuBarBottom, MenuTriggerInnerCircle, MenuTriggerOuterCircle, MenuBarTop, MenuTriggerContainer, MenuTriggerLine } from './MenuTrigger.style'

interface iMenuTrigger {
  isOpen: boolean
  setOpen: (value: boolean) => void
}
const MenuTrigger = (props: iMenuTrigger) => {
  const [isHovered, setHovered] = useState(false)
  const { isOpen, setOpen } = props

  return (
    <MenuTriggerContainer isOpen={isOpen} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => setOpen(!isOpen)}>
      <MenuTriggerLine isHovered={isHovered} isOpen={isOpen} />
      <MenuTriggerInnerCircle isHovered={isHovered} isOpen={isOpen} />
      <MenuTriggerOuterCircle isHovered={isHovered} isOpen={isOpen} />
      <MenuBarTop isOpen={isOpen}/>
      <MenuBarBottom isOpen={isOpen}/>
    </MenuTriggerContainer>
  )
}

export default MenuTrigger
