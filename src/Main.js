import React from "react"
import images from './sky.jpg'
import plane from './airplane4.png'
import './Header.css'

export function Main () {
  const img = {
    backgroundImage: `url(${images})`,
    width: '100%',
    height: '93%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
  }  

  const box = {
    objectFit: 'cover',
    backgroundImage: `url(${plane})`,
    width: '163px',
    height: '100px',
    position: 'fixed',
    WebkitAnimation: 'fly 5s linear 0s infinite',
    MozAnimation: 'fly 5s linear 0s infinite',
    animation: 'fly 5s linear 0s infinite',
  } 
  
  return (
  <>
    <li style={box}>
    </li>
    <div style={img}> 
    </div>
  </>
  );
}