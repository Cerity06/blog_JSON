import React from 'react'

const Person = ({person}) => {
    return (
        <div className="article">
            <h2>{person.name}</h2>
            <br/>
            <p>Characteristics: hair: {person.eye_color}, height: {person.height} 
        , Gender: {person.gender}</p>
            <p>Birth Year: {person.birth_year} days</p>
        </div>
    )
}

export default Person
