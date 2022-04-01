import React, { Component } from 'react'
import PostFormStyle from './PostFormStyle.css'
import axios from 'axios'

class POSTUser extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:'',
          email:'',
          phone:'',
          password:'',
          password2:'',
      }
    }

    OnChangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    SubmitHandler = e =>{
        e.preventDefault();
        console.log("the state object from form: ",this.state)
        axios.post('http://127.0.0.1:7500/api/user/register/',this.state)
        .then(response=>{
            console.log("server response is:",response.data);
        })
        .catch(error=>{
            console.log("server return a error:",error);
        })
    }
  render() {
      const {name,email,phone,password,password2} = this.state;
    return (
      <div className='form-wrapper' onSubmit={this.SubmitHandler}>
            <form className='register-form'>
            <h1>Register a user</h1>
              <div className='form-control'>
                  <input type="text" placeholder="name" name="name" value={name} onChange={this.OnChangeHandler} />
              </div>

              <div className='form-control'>
                  <input type="text" placeholder="email" name="email" value={email} onChange={this.OnChangeHandler} />
              </div>

              <div className='form-control'>
                  <input type="text" placeholder="phone" name="phone" value={phone} onChange={this.OnChangeHandler} />
              </div>

              <div className='form-control'>
                  <input type="password" name="password" placeholder='password' value={password} onChange={this.OnChangeHandler} />
              </div>

              <div className='form-control'>
                  <input type="password" name="password2" placeholder='password' value={password2} onChange={this.OnChangeHandler} />
              </div>

              <div className='form-control' >
                  <button type='submit'>Register</button>
              </div>
          </form>
      </div>
    )
  }
}

export default POSTUser



// ["id","name","email","phone","password","password2"]