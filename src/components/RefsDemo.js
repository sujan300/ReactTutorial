import React, { Component } from 'react'
import formStyle from "./formStyle/formControl.css"

class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    onClickHandler = ()=>{
        alert(this.inputRef.current.value);
    }
  render() {
    return (
      <div className='form-control'>
        {/* <label > {this.props.label}</label> */}
        <input placeholder={this.props.placeholder} type={this.props.type} value={this.props.value} ref={this.inputRef} />
        <button onClick={this.onClickHandler}>Register</button>
      </div>
    )
  }
}

export default RefsDemo