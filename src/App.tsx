import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'

import Navbar from './layouts/navbar/Navbar'
import Main from './layouts/main/Main'

import './App.css'

const AppWrapper = styled.div`
min-height: 100vh;
background-color: #f5f5f5;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Navbar />
        <Main />
      </Router>
    </AppWrapper>
  );
}

export default App;
