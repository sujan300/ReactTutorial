import React from 'react'

// function FrInput(props) {
//   return (
//     <div>
//         <input type="text" />
//     </div>
//   )
// }



const FrInput = React.forwardRef((props,ref)=>{
    console.log("the props value is ::",props);
    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default FrInput