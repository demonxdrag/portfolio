import './App.css'
import theme from './theme'
import Home from './views/Home'
import GlobalFonts from './style/fonts.style'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <Home></Home>
      </ThemeProvider>
    </div>
  )
}

export default App
