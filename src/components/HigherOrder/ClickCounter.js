import React, { Component } from 'react'
import UpdateComponent from '../HigherOrderPart-2/withCounter'

class ClickCounter extends Component {
  render() {
      console.log("name is:",this.props.name);
      const { count,increamentCount,resetValue } = this.props;
    return(
        <div>
            <button onClick={increamentCount}>clicked {count} {this.props.name}</button><br/>
            <button onClick={resetValue} >Reset Button Value</button>
        </div>
        )
  }
}

export default UpdateComponent(ClickCounter,50);