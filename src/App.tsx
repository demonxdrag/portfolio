import './App.css'
import theme from './theme'
import Home from './views/Home'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Home></Home>
      </ThemeProvider>
    </div>
  )
}

export default App
