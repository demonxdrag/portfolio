import Avatar from './components/Avatar/Avatar'
import { DynamicButton } from './components/iPadOS/DynamicButton'
import DynamicCursor from './components/iPadOS/DynamicCursor'
import Menu from './components/Menu/Menu'
import { HomeContainer } from './Home.style'

const Home = () => {
  return (
    <HomeContainer>
      <DynamicCursor>
        <Menu />
        <Avatar />
        <DynamicButton></DynamicButton>
      </DynamicCursor>
    </HomeContainer>
  )
}

export default Home
