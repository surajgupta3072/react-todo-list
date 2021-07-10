import React from 'react'

const Form = ({setinputText, setTodos, todos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    setinputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: inputText, completed: false, id: Math.random()*10000}]);
    setinputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  
    return (
        <form>
      <input value={inputText} onChange = {inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;