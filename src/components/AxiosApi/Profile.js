import React from 'react'

function Profile({name,email,phone}) {
    console.log(name)
  return (
    <div>
      <h1>User Profile of {name} </h1>
        <p>name:{name}</p>
        <p>email:{email}</p>
        <p>phone:{phone}</p>
      <hr/>
    </div>
  )
}

export default Profile