import React from 'react';

// const Hello = props=>{
//     console.log(props)
//     return React.createElement(
//         'div',
//         {id:'hello',className:'container'},
//         React.createElement('h1',null,`Hello ${props.name} and ${props.firstName} !`),
//         React.createElement('p',null,`this for super hero name only ${props.superHeroName} !`)
//         )
//     }

// export default Hello;


const Hello = (props)=>{
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} as well as super Name :{props.superHeroName} </h1>
            {props.children}
        </div>
    )
}

export default Hello;