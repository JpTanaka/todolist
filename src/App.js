import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Trocar numBlabla por um dicionário ou por um array para que eu use map nele no Blabla
    numBlabla: 0,
    }
  }

  handleClick() {
    this.setState({
    numBlabla: this.state.numBlabla+1
    
    })
    console.log('aaa')
  }

  render () {
  return (
    <div>
    <TextForm />
    <Blabla num = {this.state.numBlabla}/>
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
    return (<div>
      aaa
      
      {this.props.num}

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