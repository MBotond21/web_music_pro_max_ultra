import { useState } from 'react'
import { MainNavbar } from './components/navbar'
import './App.css'
import { MainFooter } from './components/footer'
import { MainFrame } from "./components/mainframe";
import { Provider } from 'react-redux';
import store from './store';
function App() {

  return (
    <Provider store={store}>
      <MainNavbar></MainNavbar>
      <MainFooter></MainFooter>
      <MainFrame></MainFrame>
    </Provider>
  )
}

export default App
