import React from "react";

function Recipe({ id, recipe, ingredients, source, pageNumber, interest, tags, notReorderPageState, handleNotReorder }) {
    return (
    <tr>
        <td className="row-name">
            <span>{recipe}</span>
        </td>
        <td>
            <span>{ingredients}</span>
        </td>
        <td>
            <span>{source}</span>
        </td>
        <td>
            <span>{pageNumber}</span>
        </td>
        <td>
            <span>{(interest === true) ? "Interest" : ""}</span>
        </td>
        <td>
            <span>{tags}</span>
        </td>
        <td>
            <button value={notReorderPageState} onClick={(event) => handleNotReorder(event, id)}>X</button>
        </td>
    </tr>
    )
}

export default Recipe;