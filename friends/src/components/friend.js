import React from 'react'

const Friend = props => {
    return (

        <div>
            Name: {props.friend.name}
            Age: {props.friend.age} 
            Email: {props.friend.email}
        </div>

    )
}

export default Friend