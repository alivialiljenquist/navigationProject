import React, { Component } from 'react';


export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numToggles: 0
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(op) {
      this.setState({
        numToggles: this.state.numToggles + op
      })
  }


  render() {
    return(
      <div>
        The Number is: { this.state.numToggles } <br></br>
        <button onClick={() => this.handleToggle(1)} >Add</button>
        <button onClick={() => this.handleToggle(-1)} >Subtract</button>
      </div>
    )
  }
}
