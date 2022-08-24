import React, { useEffect, useState } from 'react'
import Login from '../components/Login/Login'
import { useDispatch,useSelector } from 'react-redux'
import { getUserAction } from './../redux/Actions/UserAction';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

const Auth = () => {

  const {userInfo} = useSelector((state) => state.user)
  const dispach = useDispatch()
  useEffect(() => {
    dispach(getUserAction())
  },[dispach])



  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false, important: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    setTodos(updatedTodos)
  }
  let sortedTodos = todos.sort((a, b) => b.important - a.important)


  if (userInfo.length !==0 ) {
    return (
      <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>
      {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
    )
  }else{
    return (
      <div>
          <Login />
      </div>
    )
  }
}

export default Auth