import React, {Component} from 'react';
import Todo from './Todo/Todo'
import Addtodo from './AddTodo/AddTodo'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:[{content:'task generated'},{content:'buy milk'}]
    }
  }
  deleteHandler = (index) => {
    const newTodos = [...this.state.todos]
    newTodos.splice(index, 1)
    this.setState({
      todos:newTodos
    })
  }
  addHandler = (todo) => {
    const newTodo = [...this.state.todos]
    newTodo.unshift(todo)
    this.setState({todos:newTodo})
  }
  render(){
    const {todos} = this.state
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todo state={todos} deleteHandler={this.deleteHandler}/>
      < Addtodo addHandler={this.addHandler}/>
      </div>
    );
  }
}

export default App;
