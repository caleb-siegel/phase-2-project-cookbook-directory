import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewRecipe() {
    const [newName, setNewName] = useState("")
    const [newIngredients, setNewIngredients] = useState("")
    const [newSource, setNewSource] = useState("")
    const [newPageNumber, setNewPageNumber] = useState("")
    const [newTags, setNewTags] = useState([])
    const navigate = useNavigate();

    const handleSubmitNewRecipe = (event) => {
      event.preventDefault();
      const data = {
        "name": newName,
        "ingredients": newIngredients,
        "source": newSource,
        "pageNumber": newPageNumber,
        "tags": newTags
      };
      fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(newRecipe => {
        setNewName("");
        setNewIngredients("");
        setNewSource("");
        setNewPageNumber("");
        setNewTags([]);
        navigate("/recipelist")
        alert(`${newName} has been added to the list! Go back to the home page and search for the recipe to see it.`)
      })
      .catch(error => {
        console.error(error);
      });
    };

    return (
        <div>
            <h1>This is the New Recipes Page</h1>
            <form onSubmit={handleSubmitNewRecipe}>
                <label> Name:
                    <input type="text" name="name" value={newName} onChange={(event) => setNewName(event.target.value)} />
                </label>
                <label> Ingredients:
                    <input type="text" name="ingredients" value={newIngredients} onChange={(event) => setNewIngredients(event.target.value)} />
                </label>
                <label> Source:
                    <input type="text" name="source" value={newSource} onChange={(event) => setNewSource(event.target.value)} />
                </label>
                <label> Page Number:
                    <input type="text" name="pageNumber" value={newPageNumber} onChange={(event) => setNewPageNumber(event.target.value)} />
                </label>
                {/* <label> Tags:
                    <select name="tags" value={newTags} onChange={(event) => setNewTags(event.target.value)} >
                        <option value="0">Tag 1</option>
                        <option value="1">Tag 2</option>
                        <option value="2">Tag 3</option>
                        <option value="3">Tag 4</option>
                    </select>
                </label> */}
                <button type="submit">Add Recipe</button>
            </form>

        </div>
    )
}

export default NewRecipe;