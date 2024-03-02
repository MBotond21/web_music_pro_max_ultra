import { useState } from 'react'
import { MainNavbar } from './components/navbar'
import './App.css'
import { MainFooter } from './components/footer'
import { MainFrame } from "./components/mainframe";

function App() {

  return (
    <div>
      <MainNavbar></MainNavbar>
      <MainFooter></MainFooter>
      <MainFrame></MainFrame>
    </div>
  )
}

export default App
