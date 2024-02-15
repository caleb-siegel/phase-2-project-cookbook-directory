import React from "react";

function Search({ searchTerm, handleSearchTerm }) {
    return (
        <div>
            <h2> Search For Recipes</h2>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={(event) => handleSearchTerm(event)} />
        </div>
    )
}

export default Search;