import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Subtitle from './components/Subtitle/Subtitle'
import Image from './components/Image/Image'
import Paragraph from './components/Paragraph/Paragraph'




function App() {
  return (
    <>
  <Title variables={'Hola soy la prop'}/>
  <Subtitle/>
  <Image/>
  <Paragraph/>
    </>
  )
}

export default App
