import React, { Component } from 'react'

class Forms extends Component {
  constructor(props){
    super(props)

    this.state = {
      username : "",
      comment:'',
      topic :'',
    }
  }

  handleUserNameChange =(event)=>{
    this.setState({
      username : event.target.value,
    })
  }

  commentHandler = event =>{
    this.setState({
      comment :event.target.value,
    })
  }

  topicChangeHandler = event =>{
    this.setState ({
      topic : event.target.value
    })
  }


  onSubmitHandler = event =>{
    alert(`${this.state.username} ${this.state.comment} and ${this.state.topic}`)
  }


  render() {
    return (
      <div>
          <form onSubmit={this.onSubmitHandler}>
            <div>
              <label>user Name:</label>
              <input type="text" placeholder='uername' value={this.state.username} onChange={this.handleUserNameChange} /><br/>
            </div>
            <div>
              <label>comment:</label>
              <textarea value={this.comment} onChange={this.commentHandler}></textarea>  
            </div> 
            <div>
              <label>Topic</label>
              <select value={this.topic} onChange={this.topicChangeHandler}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
              </select>
            </div>
            <input type="submit" value="submit" />     
          </form>
      </div>
    )
  }
}

export default Forms;
