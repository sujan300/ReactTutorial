import React, { Component } from 'react'

class OverCounterTwo extends Component {
  render() {
      const {count,OnclickIncreament,name}  = this.props;
    return (
      <div>
          <h1 onMouseOver={OnclickIncreament}> You Over this heading {count} times</h1>
          <p>name:{name}</p>
      </div>
    )
  }
}

export default OverCounterTwo