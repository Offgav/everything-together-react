import React from "react"
export function ShoppingList (props) {
  const todoState = props.todoState;
  const todoSetState = props.todoSetState;
  const tododoState = props.tododoState;
  const tododoSetState = props.tododoSetState;
  let [inputState, inputSetState] = React.useState({})
  let [inputState1, inputSetState1] = React.useState({})
  
  let add = () => {
    let objTodo = {
      id: inputState,
      num: ''
    }
    todoSetState (todoState.concat([objTodo]))
  }

  let add1 = () => {
    let objTododo = {
      id1: inputState1,
      num: ''
    }
    tododoSetState (tododoState.concat([objTododo]))
  }

  let del = (index) => {
    return () => {todoSetState([...todoState.slice(0, index), ...todoState.slice(index + 1)])}
  }
  let del1 = (index1) => {
    return () => {tododoSetState([...tododoState.slice(0, index1), ...tododoState.slice(index1 + 1)])}
  }

  function handleChange (index) {
    return (event) => {
      let x = [...todoState]
      x[index].num=event.target.value
      todoSetState (x)
    }
  }

  function handleChange1 (index1) {
    return (event) => {
      let y = [...tododoState]
      y[index1].num=event.target.value
      tododoSetState (y)
    }
  }

  let itog = (w) => {
    let sum = 0 
    for ( let j = 0; j < w.length; j++ ) {
      let num = Number(w[j].num)
      sum += num
    }
    return sum
  }

  let items = [];
  for ( let i = 0; i < todoState.length; i++ ) {
    items.push (
    <div key = {todoState[i].id}>
    <li>{todoState[i].id}</li>
    <input
    value = {todoState[i].num}
    onChange = {handleChange (i)}
    />
    <button onClick={del(i)} > del</button>
    </div>
    )
  }

  let items1 = [];
  for ( let i = 0; i < tododoState.length; i++ ) {
    items1.push (
    <div key = {tododoState[i].id1}>
      <li>{tododoState[i].id1}</li>
      <input
      value = {tododoState[i].num}
      onChange = {handleChange1 (i)}
      />
      <button onClick={del1(i)} > del</button>
    </div>
    )
  }
  return (
  <div className="shopping-list">
    <h1> Доход </h1>
    <ul>
    {items}
    </ul>
    <input onChange={event => inputSetState(event.target.value)}/>
       
    <button onClick={add}>
    Добавить доход
    </button>
    Итого {itog(todoState)}
  
    <h1> Расход </h1>
    <ul>
    {items1}
    </ul>
    <input onChange={event => inputSetState1(event.target.value)}/>

    <button onClick={add1}>
    Добавить расход
    </button>
    Итого {itog(tododoState)}

  </div>
  );
}