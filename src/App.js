import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './TodoList';

function App() {
  //state stuffs
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect
  useEffect(() => {
    getLocalTodos();
 }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
 }, [todos, status]);

 

  const filterHandler =() => {
    switch(status){
      case 'completed': 
      setFilteredTodos(todos.filter(todo => todo.completed ===true));
      break;
      case 'uncompleted': 
      setFilteredTodos(todos.filter(todo => todo.completed ===false));
      break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  

  //Saving the todos
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  
  return (
    <div className="App">
      <header>
        <h1>My todo list</h1>
      </header>
      <Form 
      setinputText={setinputText} 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText}
      status={status}
      setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
