import React from 'react'

const Search = ({search}) => {
    return (
        <form>
            <input 
            className="search" 
            placeholder="Search..." 
            type="search"
            onChange={(e) => search(e.target.value)} />
        </form>
    )
}

export default Search
