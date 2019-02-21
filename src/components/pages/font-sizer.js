import React, { Component } from 'react';


export default class FontSizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello",
      font: 2
    }
    this.textSizer = this.textSizer.bind(this);
  }

  textSizer(op) {
      this.setState({
        text: this.state.text,
      })
      this.setState({
        font: this.state.font + op
      })
  }

  
  render() {
    return(
      <div>
        <div style={{fontSize: this.state.font + 'em'}}>{ this.state.text }</div>  <br></br>
        <button onClick={() => this.textSizer(1)} >Bigger</button>
        <button onClick={() => this.textSizer(-1)} >Smaller</button>
      </div>
    )
  }
}