import React from "react"
import './Header.css'

export function Header(props) {
  let [showMenuState, setShowMenuState] = React.useState(false)
  let m = '';
  if (showMenuState === true) {
    m = 'block'
  }
  else {
    m = 'none'
  }

  return (
    <div style={{
      position: 'absolute',
    }}
      class="dropdown"
      onMouseEnter={() => {
        setShowMenuState(true)
      }}
      onMouseLeave={() => {
        setShowMenuState(false)
      }}>
      <button class="dropbtn"
        onClick={() => { props.setState(1) }}>
        Меню
      </button>
      <div
        class="dropdown-content">
        <a
          href="#"
          onClick={() => { props.setState(2) }}>
          Семейный бюджет
        </a>
        <a
          href="#"
          onClick={() => { props.setState(3) }} >
          Крестики нолики
        </a>
        <a
          href="#"
          onClick={() => { window.open("https://ru.wikipedia.org/wiki/") }} >
          Википедия
        </a>
      </div>
    </div>
  )
}