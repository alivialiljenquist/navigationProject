import React, { Component } from 'react';

import Show from './show'

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponent: false,
      numToggles: 0
    }
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  onButtonClick() {
    console.log("The value of showCompont was: ", this.state.showComponent)
    this.setState({
      showComponent: !this.state.showComponent
    })
  }

  handleToggle() {
      this.setState({
          numToggles: this.state.numToggles + 1
      })
  }

  render() {
    return(
      <div>
        <h3>Example</h3>

        <button onClick={this.onButtonClick}>
          Click me to change the showComponent value
        </button>
        
        { this.state.showComponent ? <Show /> : null }

        <hr/>
        <button onClick={this.handleToggle} >Click Me</button>
        <p>
            I have been clicked {this.state.numToggles}
        </p>
      </div>
    )
  }
}

export default Toggle;

