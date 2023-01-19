import { useRef, useState } from 'react'
import { Text } from '../../../style/fonts.style'
import ColorCard from '../ColorCard/ColorCard'
import DynamicButton from '../iPadOS/DynamicButton'
import { Circle, ColorContainer, Line, MenuColorContainer, MenuContainer, MenuItemContainer } from './Menu.style'
import MenuTrigger from './MenuTrigger'

const Menu = () => {
	const [isHovered, setHovered] = useState(false)
	const [isOpen, setOpen] = useState(false)
	const menuRef = useRef(null)

	const handleScroll = (screenName: string) => {
		// const scrollContainer = document.getElementById('home')
		// if (scrollContainer) {
		const screen = document.getElementById(screenName)
		screen?.scrollIntoView({ behavior: 'smooth' })
		// }
	}

	return (
		<MenuContainer ref={menuRef}>
			<MenuTrigger isOpen={isOpen} setOpen={setOpen} />
			<Circle isOpen={isOpen} isHovered={isHovered} />
			<Line isOpen={isOpen} isHovered={isHovered} />
			<MenuColorContainer isOpen={isOpen} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
				<ColorContainer isOpen={isOpen}>
					<ColorCard color='orange'></ColorCard>
				</ColorContainer>
				<MenuItemContainer isOpen={isOpen}>
					<DynamicButton onClick={() => handleScroll('main')}>
						<img src='logo.svg' width={30} alt='logo' />
					</DynamicButton>
					<DynamicButton onClick={() => handleScroll('projects')}>
						<img src='icons/code.svg' alt='Projects' />
						<Text>Projects</Text>
					</DynamicButton>
					<DynamicButton onClick={() => handleScroll('landings')}>
						<img src='icons/design.svg' alt='Landings' />
						<Text>Landings</Text>
					</DynamicButton>
					{/* <DynamicButton onClick={() => handleScroll('main')}>
						<img src='icons/bio.svg' alt='Bio' />
						<Text>Bio</Text>
					</DynamicButton> */}
				</MenuItemContainer>
			</MenuColorContainer>
		</MenuContainer>
	)
}

export default Menu
