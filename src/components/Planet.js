import React from 'react'

const Planet = ({planet}) => {
    return (
        <div className="article">
            <h2>{planet.name}</h2>
            <br/>
            <p>Population: {planet.population} - Terrain: {planet.terrain}</p>
            <p>created: {planet.created}</p>
            <p>Orbital period: {planet.orbital_period} days</p>
        </div>
    )
}

export default Planet
