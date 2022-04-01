import React,{ Component } from "react";

class Message extends Component{
    constructor(){
        super();
        this.state ={
            message:"Welcome Visitor"
        }
        this.count = 0;
    }

    changeMessage(){
        this.setState({
            message:"on this number: 9845674021",
        })
    }

    againChange(){
        this.setState({
            message:"again change my number of ncell is:98085559557",
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={
                    ()=>{
                        console.log(this.count);
                        if(this.count%2===0){
                            this.changeMessage();
                            this.count +=1;
                        }else{
                            this.againChange();
                            this.count +=1;
                        }
                    }}> next number
                </button>
            </div>
        )
    }
}



export default Message;