import React, { Component } from 'react';

class Picker extends Component  {
  constructor(props) {
    super(props)

    const bgColor = this.props.bgColor
  }
  render() {
    const pickerStyle = {borderRadius: '50%', marginLeft: '5px', marginRight: '5px', borderRadius: '50px', minWidth: '50px', minHeight: '50px', height: '50px', width: '50px', backgroundColor: 'maroon'}
    return (
      <div className='picker' style={pickerStyle} onClick={this.props.bgColor}></div>
    )
  }
}

export default Picker
