import React, { Component } from 'react'
import axios from 'axios'

import Profile from './Profile'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users :[],
         errorMessage:[],
      }
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:7500/api/user/get/")
        .then(response=>{
            this.setState({
                users:response.data.data
            })
        }).catch(error=>{
            this.setState({errorMessage:error.error})
        })
        
        
        
    }
    render() {
      const { users,errorMessage } = this.state;
    return (
      <div>
        <h1>User Profile List</h1>
        <h1>{errorMessage}</h1>
          {
              users.length ?
            //   users.map(user=><div key={user.name}>name:{user.name} email:{user.email} phone:{user.phone}</div>):
            users.map(user=><Profile key={user.id} name={user.name} email={user.email} phone={user.phone} />):
            null

          }
          {
             errorMessage ? errorMessage.map(error=><div>{error}</div>):null 
          }
      </div>
    )
  }
}

export default PostList