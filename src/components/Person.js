import React from "react";

function Person(props){
    return <div>
        <h2>I am {props.person.name} and age {props.person.age} skill is :{props.person.skill}</h2>
    </div>
}

export default Person;