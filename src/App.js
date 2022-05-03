import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    ToDoNumber: 1,
    TodoList: [],
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
    <div>
    <TextForm handleChange = {(e) => this.handleChange(e)} handleSubmit = {(e) => this.handleSubmit(e)}
     valuetext = {this.state.Textvalue} />
    <ToDoList todoarray = {this.state.TodoList} 
    handleClick = {(todo) => this.handleTodoClick(todo)}/>
    </div>
  );
}
}

class ToDoList extends React.Component {
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
}






class TextForm extends React.Component {
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


export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);