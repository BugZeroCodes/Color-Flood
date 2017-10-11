import React, { Component } from 'react';
import Grid from './components/Grid';
import Picker from './components/Picker'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {newColor: null};
    this.bgColor = this.bgColor.bind(this)
  }

  bgColor(e) {
    e.preventDefault()
    this.setState({newColor: {backgroundColor: 'red'}})
  }

  render() {
    return (
      <div className="App">
        <Picker bgColor={this.bgColor} />
        <Grid />
      </div>
    );
  }
}

export default App;
