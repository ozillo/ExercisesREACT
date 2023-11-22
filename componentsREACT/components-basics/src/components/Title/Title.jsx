import React from 'react'
import "./Title.css"

const Title = ({variables}) => {
let variable2=variables

  return (
    <>
    <h1>Welcome to Components ReactJS</h1>
    <h2>{variable2}</h2>
    </>
  )
}

export default Title