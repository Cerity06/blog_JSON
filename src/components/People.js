import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person.js'

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
}

const People = () => {
    // refetch data automatically when needed
    // verify promise with 'status' (error/success)
    const { data, status } = useQuery('people', fetchPeople); 
    console.log(data);

    return (
        <div className="articles">
            <h2>People</h2>
            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'success' && (
                <div>{data.results.map(person =>
                <Person key={person.name} person={person} />
                )}
                </div>
            )}
        </div>
    )
}
export default People
