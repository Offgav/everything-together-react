import React from "react"
export function Header (props) {
  const buttonStyle={
    color:'white',
    backgroundColor:'black',
    display:'inline-block',
    height:'100%',
  }
  const activeStyle={
    color:'white',
    backgroundColor:'red',
    display:'inline-block',
    height:'100%',
  }
   
  let {activeState} = props
   
  return ( 
  <>
  <div style={{
    backgroundColor:'black',
    position: 'sticky',
    top: '0px',
    height:'7%',
  }}> 
    <button style = {activeState === 1 ? activeStyle:buttonStyle}
    onClick = {() => {props.setState(1)}} >
    Главная страница
    </button>
    <button style = {activeState === 2 ? activeStyle:buttonStyle}
    onClick = {() => {props.setState(2)}}>
    Семейный бюджет
    </button>
    <button style = {activeState === 3 ? activeStyle:buttonStyle}
    onClick = {() => {props.setState(3)}} >
    Крестики нолики
    </button>
    <button style = {activeState === 4 ? activeStyle:buttonStyle}
    onClick = {() => {window.open("https://ru.wikipedia.org/wiki/")}} >
    Википедия
    </button>
  </div>
  </> 
  )
}