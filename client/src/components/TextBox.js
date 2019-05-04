//Textbox that takes in and displays lines
import React, { Component } from 'react';

class TextBox extends Component {

  constructor(){
    super();

    this.addToCurrentText = this.addToCurrentText.bind(this);
    this.checkLineStatus = this.checkLineStatus.bind(this);
    this.moveToEndOfLine = this.moveToEndOfLine.bind(this);

    this.state = {
      currentText: '',
      currentCharacter: 0,
    };
  }

  componentDidMount(){
    const newTextLine = this.props.script[this.props.scriptLine].text;
    this.addToCurrentText(newTextLine[this.state.currentCharacter]);
  }

  componentDidUpdate(){
    if(this.state.currentCharacter === 0){
      console.log('component updated with a current character of 0');
      const currentText = this.props.script[this.props.scriptLine].text;
      var textLoop = setTimeout(() => this.addToCurrentText(currentText[this.state.currentCharacter]), 150);
    }
  }

//auto-firing function that makes the text appear to 'type'
  addToCurrentText(newCharacter){
    //catch-all to prevent bad characters leaking into the text given how active the interface can be
    if(newCharacter !== undefined){
      const newTextLine = this.props.script[this.props.scriptLine].text;

      //add the new character to the string and then move the pointer by
      this.setState({currentText: this.state.currentText + newCharacter});
      this.setState({currentCharacter: this.state.currentCharacter + 1});

      //if there is more text to display
      if(this.props.script[this.props.scriptLine].text.length > this.state.currentCharacter){
        var textLoop = setTimeout(() => this.addToCurrentText(newTextLine[this.state.currentCharacter]), 150);
      }
    }
  }

//function to finish the current 'typing' line of text
  moveToEndOfLine(){
    this.setState({currentText: this.props.script[this.props.scriptLine].text});
    this.setState({currentCharacter: this.props.script[this.props.scriptLine].text.length + 1});
  }

  checkLineStatus(){
    //line isn't done yet, so instantly finish the current line
    if(this.props.script[this.props.scriptLine].text.length > this.state.currentCharacter) this.moveToEndOfLine();
    else{
      //load in the next line
      console.log('loading in next line');
      this.props.nextLine();
      this.setState({currentCharacter: 0});
      this.setState({currentText: ''});
      console.log(this.props.scriptLine);
      this.addToCurrentText(this.props.script[this.props.scriptLine].text[0]);
    }
  }

render(){
  return(
    <div id="TextBox" onClick={this.checkLineStatus}>{this.state.currentText}</div>
  )
}
}

export default TextBox;
