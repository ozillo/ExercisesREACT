import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Subtitle from './components/Subtitle/Subtitle'
import Paragraph from './components/Paragraph/Paragraph'
import Image from './components/Image/Image'


function App() {
  const titol="Welcome to Components and Props ReactJS"
  const subtitol="This is an example components and Props with ReactJS"
  const paragraf="This is a paragraph with props"
  const src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1700569308/REACT/pngwing.com_hjf2q4.png"
  const alt="logoREACT"

  return (
    <>
    <Title perro={titol}/>
    <Subtitle data={subtitol}/>
    <Paragraph data={paragraf}/>
    <Image src={src} alt={alt}/>  
    </>
  )
}

export default App
