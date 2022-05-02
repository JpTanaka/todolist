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
    }
  }

  handleClick() {
    const numero = this.state.numBlabla+1;
    console.log('aaaaaaaaaaaaaaa' + this.state.BlablaArray);
    this.setState({
    numBlabla: this.state.numBlabla+1,
    BlablaArray: this.state.BlablaArray.concat(numero),
    })
    console.log(this.state.BlablaArray)
  }

  render () {
  return (
    <div>
    <TextForm />
    <Blabla arr = {this.state.BlablaArray}/>
    <ButtonBlabla onClick = {() => this.handleClick()}/>
    </div>
  );
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
    console.log(this.props.arr, Array.isArray(this.props.arr), 'aaaaaaaaaaaaaaasdsadas');
    const listnumbers = this.props.arr;
    const listofNumbers = listnumbers.map((number) => 
      <li key = {number.id}>{number}</li>
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
          <form>
              <input type='text' placeholder='What do you have to do?'></input>
              <button className = "button-submit" 
              onClick = {() => this.props.placeText()}>Submit</button>
          </form>
      );
  }
}


export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);