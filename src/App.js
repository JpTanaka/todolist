import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    numBlabla: 1,
    BlablaArray: [1],
    ToDoNumber: 1,
    TodoList: [],
    Textvalue: '',

    }
  }

  handleClickBlabla() {
    const numero = this.state.numBlabla+1;
    this.setState({
    numBlabla: this.state.numBlabla+1,
    //Try to make BlablaArray update using wrapper functions and spread operator!
    BlablaArray: this.state.BlablaArray.concat(numero),
    })
  }

  handleChange(event) {
    this.setState({
      Textvalue: event.target.value,
    })
  }
  handleSubmit(event) {
    this.setState ({
      ToDoNumber: this.state.ToDoNumber+1,
      TodoList: this.state.TodoList.concat(this.state.Textvalue),
      Textvalue: '',
    })
    alert('An essay was submitted: ' + this.state.Textvalue);
    console.log(this.event.TodoList);
    event.preventDefault();
  }

  render () {
  return (
    <div>
    <TextForm handleChange = {(e) => this.handleChange(e)} handleSubmit = {(e) => this.handleSubmit(e)}
     valuetext = {this.state.Textvalue} />
    <ToDoList todoarray = {this.state.TodoList}/>
    <Blabla arr = {this.state.BlablaArray}/>
    <ButtonBlabla onClick = {() => this.handleClickBlabla()}/>
    </div>
  );
}
}

class ToDoList extends React.Component {
  render () {
    const Liste = this.props.todoarray.map ((todo) => {
      <li key={todo.id}>{todo}</li>
    });
    return (<div>
      <ol>
        {Liste}
      </ol>
    </div>)

  }
}

class ButtonBlabla extends React.Component {
  render () {
    return (
    <button onClick = {this.props.onClick}> Click Me!!! </button>
    )}
}

class Blabla extends React.Component {
  render () {
    const listofNumbers = this.props.arr.map((number) => 
      <li key = {number.toString}>{number}</li>
    );
    return (<div>
      <ol>
        {listofNumbers}
      </ol>

      </div>
      
    )
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