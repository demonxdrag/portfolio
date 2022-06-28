import { DynamicButton } from './components/iPadOS/DynamicButton'
import DynamicCursor from './components/iPadOS/DynamicCursor'

const Home = () => {
  return (
    <div>
      <DynamicCursor>
        <DynamicButton></DynamicButton>
      </DynamicCursor>
    </div>
  )
}

export default Home
