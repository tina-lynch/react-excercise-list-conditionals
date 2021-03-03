import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'


class App extends Component {
  state = { inputValue: ''}


  eventHandler = (event) =>{
    this.setState({ inputValue: event.target.value})
  }

  deleteLetter = (index) =>{
    const value = [...this.state.inputValue];
    value.splice(index, 1);
    const newVal = value.join('')

    this.setState({inputValue: newVal} )
  }
  

  render() {
    let boxes = null;
    let splitVal = [...this.state.inputValue];

    if (this.state.inputValue){
      boxes = (
        <div className="flex">
        {splitVal.map((letter, index) => {
          return <Char
            key={index}
            letter={letter}
            click={() => this.deleteLetter(index)}
            >{letter}</Char>
        })}
        </div> 
      )
    }



    return (
      <div className="App">
        <p>Create an input field which outputs the length of the entered text below it (e.g. in a paragraph). Depending on the text length, output different paragraphs. Render a list of tiles with each tile receiving a different letter from the entered text, and when clicked the letter should be removed from the entered text</p>
        <br></br><br></br>

        <input type="text" onChange={this.eventHandler} value={this.state.inputValue}/>
        <p>Input: {this.state.inputValue}</p>
        <Validation length={this.state.inputValue.length}/>
          {boxes}
      </div>
    );
  }
}

export default App;
