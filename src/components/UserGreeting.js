import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn :true,
        }
        console.log(props)
    }
  render() {
      return this.state.isLoggedIn && <div> Welcome Sujan Adhikari</div>
    //   return this.state.isLoggedIn ?(
    //     <div>Welcome Sujan</div>
    //     ):(
    //     <div>Welcome Guest</div>
    //   )


    //   return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Sujan</div>:
    //     <div>Welcome Guest</div>
    //   )
    //   let message;
    //   if(this.state.isLoggedIn){
    //       message = <div> welcome Sujan Adhikari</div>
    //   }
    //   else{
    //       message = <div> Welcome Guest</div>
    //   }

    //   return <div>{message}</div>


    //   if(this.state.isLoggedIn){
    //       return (
    //           <div>
    //               welcome Sujan Adhikari ..
    //           </div>
    //       )
    //   }else{
    //     return (
    //         <div>
    //             <div>Welcome Guest</div>
    //         </div>
    //     )
    //   }
  }
}

export default UserGreeting