import './App.css';
import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaCheckCircle } from "react-icons/fa"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    ToDoNumber: 1,
    TodoList: ["aaaaaaaaaaaaaadfffffffffffffffffffff", "aaaaaaaadffffffffffsddd"],
    Textvalue: '',
    }
  }


  handleChange(event) {
    this.setState({
      Textvalue: event.target.value,
    })
  }
  handleSubmit(event) {
    console.log(this.state.TodoList)
    this.setState ({
      ToDoNumber: this.state.ToDoNumber+1,
      TodoList: this.state.TodoList.concat(this.state.Textvalue),
      Textvalue: '',
    })
    //alert('An essay was submitted: ' + this.state.Textvalue);
    console.log(this.state.TodoList);
    event.preventDefault();
  }

  handleTodoClick(todo) {
    const ind = this.state.TodoList.indexOf(todo);
    var tempTodoList = this.state.TodoList.slice(0);
    tempTodoList.splice(ind);
    
    this.setState ({
      TodoList: tempTodoList,
    })
    console.log(ind, tempTodoList);
  }

  render () {
  return (
    <div class = "container">
    <Header />
    <TextForm class = "forms" handleChange = {(e) => this.handleChange(e)} handleSubmit = {(e) => this.handleSubmit(e)}
     valuetext = {this.state.Textvalue} />
    <ToDoList todoarray = {this.state.TodoList} 
    handleClick = {(todo) => this.handleTodoClick(todo)}/>
    </div>
  );
}
}
function Header () {
  return (
    <div className='titlediv'>
    <h1 className = "title">To-do List <FaCheckCircle /></h1>
    </div>
  )
}

function ToDoList (props) {
  const Liste = props.todoarray.map ((todo) => {
    return (
      <div className="todo-card">
      <li key={todo.id} className = "todolistitem" value={todo.id}>
      {todo}
      </li>
      

      <div className="buttons">
<button className='button'
      onClick = {() => props.handleClick(todo)}>Did it!</button>
      </div>

      
      </div>
      );
  });
  return (
    <div >
      <ol className='todo-space'>
        {Liste}
      </ol>
    </div>
  )
}


/*class ToDoList extends React.Component {
  render () {
    console.log(this.props.todoarray)
    const Liste = this.props.todoarray.map ((todo) => {
      return (
        <li key={todo.id} className = "todolistitem" value={todo.id}>{todo}
        <button className='todobutton' 
        onClick = {() => this.props.handleClick(todo)}>Did it!</button>
        </li>);
    }
    );
    return (
    <div>
      <ol>
        {Liste}
      </ol>
    </div>)

  }
}*/


function TextForm (props) {
  return (<form class = "forms" onSubmit = {props.handleSubmit}>
  <input type='text' placeholder='What do you have to do?' className='formbox' value = {props.valuetext} 
  onChange = {props.handleChange}></input>
  <button className = "button" 
  type = "submit">Submit</button>
</form>)
}



/*class TextForm extends React.Component {
  render () {
      return (
          <form onSubmit = {this.props.handleSubmit}>
              <input type='text' placeholder='What do you have to do?' value = {this.props.valuetext} 
              onChange = {this.props.handleChange}></input>
              <button className = "button-submit" 
              type = "submit">Submit</button>
          </form>
      );
  }
}
*/

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);