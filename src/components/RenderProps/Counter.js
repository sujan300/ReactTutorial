import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    OnclickIncreament = () =>{
        this.setState(prevState=>{
            return {
                count:prevState.count+1
            };
        })
    }
  render() {

    console.log("this props value is: ",this.props)
    return (
        <div>
            {this.props.children(this.state.count,this.OnclickIncreament,"sujan")}
        </div>
    )
  }
}

export default Counter