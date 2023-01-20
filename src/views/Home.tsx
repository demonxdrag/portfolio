import DynamicCursor from './components/iPadOS/DynamicCursor'
import Menu from './components/Menu/Menu'
import Modal from './components/Modal/Modal'
import { HomeContainer } from './Home.style'
import Main from './screens/1-Main/Main'
import Projects from './screens/2-Projects/Projects'
import Landing from './screens/3-Landing/Landing'
import Bio from './screens/4-Bio/Bio'

const Home = () => {
	return (
		<HomeContainer id='home'>
			<DynamicCursor>
				<Menu />
				<Main />
				<Projects />
				<Landing />
				<Bio />
				<Modal />
			</DynamicCursor>
		</HomeContainer>
	)
}

export default Home
