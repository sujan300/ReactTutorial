import React, { Component } from 'react'

class ClickCountertwo extends Component {
  render() {
    const {count,OnclickIncreament,name}  = this.props;
    return (
      <div>
          <button onClick={OnclickIncreament}> You Clicked { count } times {name}</button>
      </div>
    )
  }
}

export default ClickCountertwo