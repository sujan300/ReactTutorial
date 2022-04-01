import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : '';
    console.log(props)
    console.log(" the className in Props is",className)
  return (
    <div>
        <h1 className={`${className} font-xl`}>StyleSheet</h1>
        <h1>inside child components </h1>
        <h1 className='success'> Error</h1>
    </div>
  )
}

export default StyleSheet;