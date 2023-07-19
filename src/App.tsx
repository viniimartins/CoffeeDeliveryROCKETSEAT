import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from "react-router-dom"
import { Router } from "../src/Router"

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Context } from './context'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Context>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Context>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
