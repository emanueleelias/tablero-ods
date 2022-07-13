import React from 'react'
import "./header.scss";

const Header = ({ nameSection }) => {
  return (
    <header className='container header-container'>
      <h1>{nameSection}</h1>
      <h2>Tablero de Objetivos de Desarrollo Sustentable</h2>
    </header>
  )
}

export default Header