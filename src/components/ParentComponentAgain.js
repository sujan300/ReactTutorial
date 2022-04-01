import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureCustomComponent from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComponentAgain extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"sujan",
        }
    }
    componentDidMount=()=>{
        setInterval(()=>{
            this.setState({
                name :`sujan`,
            })},2000)
    }

  render() {
    console.log("*********************parent Component ********************************");
    return (
        <div style={{
            border:"8px solid green",
            padding:"5px",
            display:"flex",
            justifyContent:"space-between"
        }}>
            Parent Component
            < MemoComponent name={this.state.name} />
            {/* <RegComponent name={this.state.name} />
            <PureCustomComponent name={this.state.name} /> */}
        </div>
    )
  }
}

export default ParentComponentAgain