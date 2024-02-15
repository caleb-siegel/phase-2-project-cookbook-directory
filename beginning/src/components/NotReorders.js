import React from "react";
import Recipe from "./Recipe";
import { useState, useEffect } from "react";

function NotReorders({ recipes, nonReorderedList }) {
    const [notReorders, setNotReorders] = useState([]);
    
    useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then(response => response.json())
      .then(notReorders => setNotReorders(notReorders))
    }, []);

    const nonReorderedListPage = notReorders.filter(recipe => (recipe.notAReorder === true))

    const [notReorderPageState, setNotReorderPageState] = useState(false)

    const handleNotReorder = (event, id) => {
        event.preventDefault();
        fetch(`http://localhost:3000/recipes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "notAReorder": notReorderPageState
          })
        })
        .then(response => response.json())
        .then(updatedRecipe => {
            console.log(updatedRecipe)
            setNotReorderPageState(false)
            console.log(updatedRecipe.notAReorder)
            setNotReorders(notReorders.filter(recipe => updatedRecipe.id !== recipe.id))
        })
      }

    return (
        <div>
            <h1>Not A Reorder</h1>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th className="row-name">
                                Name
                            </th>
                            <th>
                                Ingredients
                            </th>
                            <th>
                                Source
                            </th>
                            <th>
                                Page Number 
                            </th>
                            <th>
                                Interest
                            </th>
                            <th>
                                Tags 
                            </th>
                            <th>
                                Not A Reorder 
                            </th>
                        </tr>
                        {nonReorderedListPage.map((recipe) => {return <Recipe key={recipe.id} id={recipe.id} recipe={recipe.name} ingredients={recipe.ingredients} source={recipe.source} pageNumber={recipe.pageNumber} interest={recipe.interest} tags={recipe.tags} notReorderPageState={notReorderPageState} handleNotReorder={handleNotReorder}/>})}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NotReorders;