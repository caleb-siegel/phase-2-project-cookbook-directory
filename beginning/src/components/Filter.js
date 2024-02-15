import React from "react";

function Filter({ filterOptions, handleFilterChange, filters }) {
    return (
        <div>
            <h2>Filter by Tag
                <label>
                    <select multiple value={filters} onChange={(event) => handleFilterChange(event)}>{filterOptions}</select>
                </label>
            </h2>
        </div>
    )
}

export default Filter;