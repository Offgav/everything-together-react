import React from "react";
import './App.css';
import { ShoppingList } from './ShoppingList';
import { Header } from './Header';
import { Main } from './Main';
import { TicTacToe } from './TicTacToe';
function App() {
  let [poleState, setPoleState] = React.useState([])
  let [todoState, todoSetState] = React.useState([])
  let [tododoState, tododoSetState] = React.useState([])
  let [activeButonState, activeButonSetState] = React.useState(1)
  
  let jspage = <Main />
  switch (activeButonState) {
    case 3:
      jspage = <TicTacToe
        poleState={poleState}
        setPoleState={setPoleState} />
      break
    case 2:
      jspage = <ShoppingList
        todoState={todoState}
        todoSetState={todoSetState}
        tododoState={tododoState}
        tododoSetState={tododoSetState}
      />
      break
    case 1:
      jspage = <Main />
      break
    default: jspage = <Main />
      break
  }
  return (

    <div style={{ height: '100vh' }}>
      <Header
        setState={activeButonSetState}
        activeState={activeButonState} />
      {jspage}
    </div>
  );
}

export default App;
