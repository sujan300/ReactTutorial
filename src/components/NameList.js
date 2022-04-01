
import React, { Component } from 'react'
import Person from './Person';



function NameList(){
    const names = ["sujan","suraj","bhaskar"];
    const NameList = names.map(name=><h1>{name}</h1>)
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]

      const PersonList = persons.map(person =><Person key={person.id} person={person}/>)
    return <div>
        {PersonList}
    </div>
}


export default NameList;
