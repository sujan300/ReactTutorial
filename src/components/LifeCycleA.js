import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state ={
            name : "sujan Adhikari",
        }
        console.log("LifeCycleA constructor");

    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(){
        console.log("LifeCyleA ShouldComponentUpdate Method ...");
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("LifeCycleA getSnaoShotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate belongs to A component ..");
    }

    Change=()=>{
        this.setState({
            name : "sujan Evolution ...."
        })
    }

  render() {
      console.log("LifeCyleA render:");
    return (
    <div>
        <div>LifeCycleA</div>
        <button onClick={this.Change}>Click Here</button>
        <LifeCycleB />
    </div>
    )
  }
}

export default LifeCycleA