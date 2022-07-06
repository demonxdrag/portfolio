import Avatar from './components/Avatar/Avatar'
import DynamicCursor from './components/iPadOS/DynamicCursor'
import Menu from './components/Menu/Menu'
import { HomeContainer } from './Home.style'

const Home = () => {
  return (
    <HomeContainer>
      <DynamicCursor>
        <Menu />
        <Avatar />
      </DynamicCursor>
    </HomeContainer>
  )
}

export default Home
