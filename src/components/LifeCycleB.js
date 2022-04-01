import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props){
        super(props)
        this.state ={
            name : "sujan Adhikari Belongs to B Component ...",
        }
        console.log("LifeCycleB constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(){
        console.log("LifeCyleB ShouldComponentUpdate Method ...");
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("LifeCycleB getSnaoShotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate belongs to B component ..");
    }
  render() {
      console.log("LifeCyleB render:");
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB