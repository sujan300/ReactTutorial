import React, { PureComponent } from 'react'

class PureCustomComponent extends PureComponent {
  render() {
      console.log("..................Pure Component ............")
    return (
        <div style={{
            border:"5px solid blue",
            padding:"7px"
        }}>
          Pure Component
          <p>Your profile</p>
          <ol type='1'>
              <li>First Name:{this.props.name}</li>
          </ol>
        </div>
    )
  }
}

export default PureCustomComponent