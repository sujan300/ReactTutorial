import React, { Component } from 'react'
import ChildComponet from './childComponet';

export class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }
  render() {
    return (
      <div>
          <ChildComponet greetHandler={this.greetParent} />
          <h1> hi this is ParentComponent</h1>
      </div>
    )
  }
}

export default ParentComponent