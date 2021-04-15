import React from 'react'
import { useState, useEffect } from 'react'
import Planet from './Planet.js'

const Planets = () => {
    const [data, setData] = useState();
    const [page, setPage] = useState(1); 

    const fetchPlanets = async (page) => {
        const res = await fetch(`http://swapi.dev/api/planets?page=${page}`);
        const info = await res.json();
        setData(info);
    }
    
    useEffect(() => {
        console.log('fire');
        fetchPlanets(page);
    }, [page]);


    return (
        <div className="articles">
            <h2>Planets</h2>
            <button className="submit"
                onClick={() => setPage(1)}>
                Page 1
            </button>
            <button className="submit"
                onClick={() => setPage(2)}>
                Page 2
            </button> 
            <button className="submit"
                onClick={() => setPage(3)}>
                Page 3
            </button>

            {data && (
                <div>{data.results.map(planet =>
                <Planet key={planet.name} planet={planet} />
                )}
                </div>
            )}
        </div>
    )
}

export default Planets
