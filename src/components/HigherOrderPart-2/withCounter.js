import React from "react";

const UpdateComponent = (OriginalComponent,previousCount)=>{
    console.log("OriginalComponent Value is:",OriginalComponent);
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
                count : 0
            }
          }
      
          increamentCount = () =>{
              this.setState(prevState =>{
                  return {count:prevState.count +previousCount}
              })
          }
      
          resetValue = () =>{
              this.setState(prevState=>{
                  return {count:0}
              })
          }
        render(){
            return <OriginalComponent 
            count={this.state.count} 
            increamentCount={this.increamentCount} 
            resetValue={this.resetValue}
            {...this.props}
            />
        }
    }
    return NewComponent;
}

export default UpdateComponent