import React, { Component } from 'react'

class RegComponent extends Component {
  render() {
      console.log("Regular Component")
    return (
        <div style={{
            border: "5px solid red",
            padding:"7px"
        }}>
            Regular Component
            <p> first Name: {this.props.name}</p>
        </div>
    )
  }
}

export default RegComponent