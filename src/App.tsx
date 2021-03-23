import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled/theme/Theme"
import { GlobalStyles } from './styled/GlobalStyles'
import { useDarkMode } from "./hooks/useDarkMode"

import { AppWrapper } from './AppElements'

import Navbar from './layouts/navbar/Navbar'
import Main from './layouts/main/Main'

function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <AppWrapper>
          <Router>
            <Navbar theme={theme} toggleTheme={themeToggler} />
            <Main />
          </Router>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
