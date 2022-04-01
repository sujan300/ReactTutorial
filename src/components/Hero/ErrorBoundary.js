import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
        console.log("getDerivedStateFromError --- from ErrorBoundary file ...")
        return {
            hasError:true,
        }
    }
  render() {
      console.log("this is the render ....................")
      if(this.state.hasError){
          return <h1>Something Went Wrong !</h1>;
      }
      return this.props.children;
  }
}

export default ErrorBoundary