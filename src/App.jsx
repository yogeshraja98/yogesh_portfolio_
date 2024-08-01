import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactReduxPage from './components/redux_config_steps/react_redux_index'
import LandingPage from './components/Landingpage/landing_page'


function App() {
  return (
    // <>
    //   <GlobalStyle></GlobalStyle>
    //   <Header></Header>
    //   <Main></Main>
    //   <Footer></Footer>
    // </>
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="redux" element={<ReactReduxPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
