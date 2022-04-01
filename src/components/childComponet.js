import React from 'react'

function childComponet(props) {
  return (
    <div>
        <p>this is childComponet</p>
        <button onClick={()=>props.greetHandler("child")}>Greet Parent</button>
    </div>
  )
}

export default childComponet;