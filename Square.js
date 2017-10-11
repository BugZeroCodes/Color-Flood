import React, { Component } from 'react';

class Square extends Component {
  render() {
    const initStyling = {width: '50px', height: '50px', backgroundColor: randomColor()}
    function randomColor() {
      var colors = ['red', 'yellow', 'orange', 'green', 'blue']
      return colors[Math.floor(Math.random() * colors.length)]
    }
    return (
      <div className="Square cell-12">
        <div style={initStyling}>
        </div>
      </div>
    );
  }
}
export default Square
