import React, { Component } from 'react'
import UpdateComponent from '../HigherOrderPart-2/withCounter'

class OnHoverCounter extends Component {
  render() {
    const { count,increamentCount,resetValue } = this.props;
    return (
      <div>
          <h1 onMouseOver={increamentCount}>this heading Over {count} times </h1>
          <span onMouseOver={resetValue}> Clear</span>
      </div>
    )
  }
}

export default UpdateComponent(OnHoverCounter,20);