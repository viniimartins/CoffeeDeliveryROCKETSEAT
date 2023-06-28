import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from "react-router-dom"
import { Router } from "../src/Router"

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
