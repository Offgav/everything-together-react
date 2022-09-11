import React, { useState } from "react"
import './TicTacToe.css'
export function TicTacToe() {
  const wrapper = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  }

  const start = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }

  const pole = {
    width: '300px',
    height: '300px',
    background: 'red',
    border: '1px solid rgb(10, 10, 10)',
    fontSize: '31px',
    display: 'flex',
    flexWrap: 'wrap',
  }

  const kvadr = {
    width: '100px',
    height: '100px',
    background: '#ffff',
    border: '1px solid rgb(10, 10, 10)',
    cursor: 'pointer',
    outline: 'none',
    fonSize: '60px',
    fontSize: '31px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  }

  const [poleState, setPoleState] = useState(Array(9).fill(null))

  let Winner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (poleState[a] && poleState[a] === poleState[b] && poleState[a] === poleState[c]) {
        return poleState[a]
      }
    }
    return null
  }

  const [x, setX] = useState(true)
  const w = Winner(Array)

  const handleClick = (index) => {
    const poleStateCopy = [...poleState]
    if (w || poleStateCopy[index]) return
    poleStateCopy[index] = x ? 'X' : '0'
    setPoleState(poleStateCopy)
    setX(!x)
  }

  const startNewGame = () => {
    setPoleState(Array(9).fill(null))
  }

  let ch = poleState.map((elem, index) => {
    return (
      <div style={kvadr} onClick={() => { handleClick(index) }}>
        {elem}
      </div>
    )
  }
  )

  return (

    <div style={wrapper}>

      <div style={start}>
        <button className='startbtn' onClick={() => { startNewGame() }}>
          Очистить
        </button>
        <div style={pole}>
          {ch}
        </div>
        <button className='win'>
          {Winner() ? 'Победитель' + Winner() : ' Сейчас ходит' + (x ? 'X' : '0')}
        </button>
      </div>
    </div>
  );
}